/**
 * Intelligent, low-sideeffect way to restore scroll position
 * @param elementSelector: A document.querySelector to the scroll element. Selector over ref b/c ref is unreliable.
 *
 * - The scroll element MUST have a fixed height (i.e. 100vh)
 * - This approach is imperfect, but "good-enough".
 * - window.history.state?.key is a unique history ID that is populated by popular routers (react-router, reach-router)
 */
import React from "react";

import { getKeyValueStore } from "../util/indexedDbKeyValueStore";

const storePromise = getKeyValueStore("useScrollRestore", "historyIdToScrollUps", 48 * 60 * 60 * 1000);

export function useScrollRestore(elementSelector: string) {
  const recall = React.useCallback(() => {
    const element = document.querySelector(elementSelector);
    if (!element) {
      console.warn("useScrollRestore.recall: Element not found");
      return;
    }
    const historyKey = window.history.state?.key;
    if (!historyKey) {
      console.warn("useScrollRestore.recall: History not initialized");
      return;
    }
    storePromise.then(async (store) => {
      store.get<number>(historyKey).then((scrollTop) => {
        const next = scrollTop ?? 0;
        const set = () => (element.scrollTop = next);
        // Set it aggressively over 1 seconds to ensure it gets set after content loads.
        for (let i = 0; i < 1000; i += 100) setTimeout(set, i);
      });
    });
  }, [elementSelector]);
  const save = React.useCallback(() => {
    const element = document.querySelector(elementSelector);
    if (!element) throw new Error("useScrollRestore.save: Element not found");
    const historyKey = window.history.state?.key;
    if (!historyKey) throw new Error("useScrollRestore.save: History not initialized");
    storePromise.then(async (store) => {
      const scrollTopNow = element.scrollTop;
      // If 0, don't save and remove stale saves here to reduce memory footprint
      if (scrollTopNow === 0) {
        const scrollTopLast = await store.get<number>(historyKey);
        // if scrollTopLast, is stale and remove it
        if (scrollTopLast !== undefined) {
          await store.remove(historyKey);
        }
        // else no-op
      } else {
        await store.set(historyKey, element.scrollTop);
      }
    });
  }, [elementSelector]);

  React.useEffect(() => {
    const element = document.querySelector(elementSelector);
    if (!element) throw new Error("useScrollRestore.effect: Element not found");
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
