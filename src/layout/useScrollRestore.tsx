/**
 * Intelligent, low-sideeffect way to restore scroll position
 * @param elementSelector: A document.querySelector to the scroll element. Selector over ref b/c ref is unreliable.
 *
 * - The scroll element MUST have a fixed height (i.e. 100vh)
 * - This approach is imperfect, but "good-enough".
 */
import React from "react";

import { getKeyValueStore } from "../util/indexedDbKeyValueStore";

const tabId = sessionStorage.scrollTabID || Math.round(Math.random() * 100000);
sessionStorage.scrollTabID = tabId;
const storeName = `useScrollRestore-${tabId}`;
const storePromise = getKeyValueStore(storeName);
storePromise.then((store) => {
  // window.addEventListener("unload", store.clear);
  // window.addEventListener("beforeunload", store.clear);
});

export function useScrollRestore(elementSelector: string) {
  const recall = React.useCallback(() => {
    const element = document.querySelector(elementSelector);
    if (!element) throw new Error("useScrollRestore.pop: Element not found");
    storePromise.then((store) => {
      store.getKeys().then((k) => {
        console.dir(k);
      });
      store.get<number>(window.history.state.key).then((scrollTop) => {
        if (scrollTop) {
          const set = () => (element.scrollTop = scrollTop);
          // Set it aggressively over 1 seconds to ensure it gets set after content loads.
          for (let i = 0; i < 1000; i += 100) setTimeout(set, i);
        }
      });
    });
  }, [elementSelector]);
  const save = React.useCallback(() => {
    const element = document.querySelector(elementSelector);
    if (!element) throw new Error("useScrollRestore.push: Element not found");
    storePromise.then((store) => {
      store.set(window.history.state.key, element.scrollTop);
    });
  }, [elementSelector]);

  React.useEffect(() => {
    const element = document.querySelector(elementSelector);
    if (!element) throw new Error("useScrollRestore.push: Element not found");
    recall();
    const savePoller = setInterval(save, 100);
    window.addEventListener("unload", save);
    window.addEventListener("pushstate", save);
    window.addEventListener("popstate", recall);
    return () => {
      // Add deley to popstate b/c race condition
      setTimeout(() => {
        clearInterval(savePoller);
        window.removeEventListener("unload", save);
        window.removeEventListener("pushstate", save);
        window.removeEventListener("popstate", recall);
      }, 100);
    };
  }, [elementSelector, recall, save]);
}

// export function scrollToTop() {
//   scrollRestoreDb.set(getUrlHash(), 0);
//   scrollElement.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }
