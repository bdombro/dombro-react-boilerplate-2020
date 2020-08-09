/**
 * Intelligent, low-sideeffect way to restore scroll position
 * @param elementSelector: A document.querySelector to the scroll element.
 * *Note* The scroll element MUST have a fixed height (i.e. 100vh)
 */
import React from "react";

import { waitFor } from "../util/wait";

let windowLoaded = false;
window.addEventListener("load", () => {
  windowLoaded = true;
});

let init = false;
export function useScrollRestore(elementSelector: string) {
  const pop = React.useCallback(() => {
    const element = document.querySelector(elementSelector);
    if (!element) throw new Error("useScrollRestore.pop: Element not found");
    const stackStr = sessionStorage.getItem("scrollStack");
    if (!stackStr) return;
    const stack = stackStr.split(",");
    const next = parseInt(stack.pop()!, 10);
    sessionStorage.setItem("scrollStack", stack.join(","));
    element.scrollTop = next;
  }, [elementSelector]);
  const push = React.useCallback(() => {
    const element = document.querySelector(elementSelector);
    if (!element) throw new Error("useScrollRestore.push: Element not found");
    const stackStr = sessionStorage.getItem("scrollStack");
    const stack = stackStr ? stackStr.split(",") : [];
    stack.push(`${element.scrollTop}`);
    sessionStorage.setItem("scrollStack", stack.join(","));
  }, [elementSelector]);

  React.useEffect(() => {
    const element = document.querySelector(elementSelector);
    if (!element) throw new Error("useScrollRestore.push: Element not found");
    if (!init) {
      waitFor(() => windowLoaded, {}).then(pop);
      init = true;
    }
    window.addEventListener("unload", push);
    window.addEventListener("pushstate", push);
    window.addEventListener("popstate", pop);
    return () => {
      // Add deley to popstate b/c race condition
      setTimeout(() => {
        window.removeEventListener("unload", push);
        window.removeEventListener("pushstate", push);
        window.removeEventListener("popstate", pop);
      }, 100);
    };
  }, [elementSelector, pop, push]);
}

// export function scrollToTop() {
//   scrollRestoreDb.set(getCurrentScrollKey(), 0);
//   scrollElement.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }
