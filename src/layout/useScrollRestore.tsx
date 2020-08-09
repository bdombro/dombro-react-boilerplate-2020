/**
 * Intelligent, low-sideeffect way to restore scroll position
 * @param elementSelector: A document.querySelector to the scroll element. Selector over ref b/c ref is unreliable.
 *
 * - The scroll element MUST have a fixed height (i.e. 100vh)
 * - This approach is imperfect, but "good-enough".
 */
import React from "react";

import { wait, waitFor } from "../util/wait";

let windowLoaded = false;
window.addEventListener("load", () => {
  windowLoaded = true;
});

// restore scroll on first load
let loaded = false;
// naively track scrollTop with a .3s delay, so that we can store it
// after a back/forward event
let lastScrollTop = 0;

export function useScrollRestore(elementSelector: string) {
  const pop = React.useCallback(() => {
    const element = document.querySelector(elementSelector);
    if (!element) throw new Error("useScrollRestore.pop: Element not found");
    const stackStr = sessionStorage.getItem("scrollStack");
    if (!stackStr) return; // this happens iff entry point to website
    const stacks = JSON.parse(stackStr);
    const urlHash = getUrlHash();
    const isBackward = !!stacks.back.length && stacks.back[stacks.back.length - 1][0] === urlHash;
    const isForward = !!stacks.forward.length && stacks.forward[stacks.forward.length - 1][0] === urlHash;
    if (isBackward) {
      const next = stacks.back.pop();
      stacks.forward.push([lastUrlHash, lastScrollTop]);
      sessionStorage.setItem("scrollStack", JSON.stringify(stacks));
      element.scrollTop = next[1];
    } else if (isForward) {
      const next = stacks.forward.pop();
      stacks.back.push([lastUrlHash, lastScrollTop]);
      sessionStorage.setItem("scrollStack", JSON.stringify(stacks));
      element.scrollTop = next[1];
    } else {
      // Unknown: best to reset.
      sessionStorage.setItem("scrollStack", JSON.stringify({ back: [], forward: [] }));
    }
    lastUrlHash = urlHash;
  }, [elementSelector]);
  const push = React.useCallback(() => {
    const element = document.querySelector(elementSelector);
    if (!element) throw new Error("useScrollRestore.push: Element not found");
    const stackStr = sessionStorage.getItem("scrollStack");
    const stacks = stackStr ? JSON.parse(stackStr) : { back: [], forward: [] };
    stacks.back.push([lastUrlHash, element.scrollTop]);
    stacks.forward = [];
    sessionStorage.setItem("scrollStack", JSON.stringify(stacks));
    lastUrlHash = getUrlHash();
  }, [elementSelector]);

  React.useEffect(() => {
    const element = document.querySelector(elementSelector);
    if (!element) throw new Error("useScrollRestore.push: Element not found");
    if (!loaded) {
      waitFor(() => windowLoaded, {}).then(pop);
      loaded = true;
    }
    const trackLastScrollTop = setInterval(async () => {
      const scrollTop = element.scrollTop;
      await wait(300);
      lastScrollTop = scrollTop;
    }, 300);
    window.addEventListener("unload", push);
    window.addEventListener("pushstate", push);
    window.addEventListener("popstate", pop);
    return () => {
      // Add deley to popstate b/c race condition
      setTimeout(() => {
        clearInterval(trackLastScrollTop);
        window.removeEventListener("unload", push);
        window.removeEventListener("pushstate", push);
        window.removeEventListener("popstate", pop);
      }, 100);
    };
  }, [elementSelector, pop, push]);
}

let lastUrlHash = getUrlHash();
function getUrlHash() {
  return `${window.location.pathname}${window.location.hash && "#" + window.location.hash}`;
}

// export function scrollToTop() {
//   scrollRestoreDb.set(getUrlHash(), 0);
//   scrollElement.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }
