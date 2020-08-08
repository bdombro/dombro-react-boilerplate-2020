/**
 * Intelligent, low-sideeffect way to restore scroll position
 */
import { openDB } from "idb";
import React from "react";

const scrollPositionTableName = "scrollPosition";
const scrollRestoreDbPromise = openDB("scrollRestore", 1.0, {
  upgrade(db) {
    db.createObjectStore(scrollPositionTableName);
  },
});

const scrollRestoreDb = {
  async get(key: string): Promise<number> {
    return (await scrollRestoreDbPromise).get(scrollPositionTableName, key);
  },
  async set(key: string, val: number) {
    return (await scrollRestoreDbPromise).put(scrollPositionTableName, val, key);
  },
  async delete(key: string) {
    return (await scrollRestoreDbPromise).delete(scrollPositionTableName, key);
  },
  async clear() {
    return (await scrollRestoreDbPromise).clear(scrollPositionTableName);
  },
  async keys() {
    return (await scrollRestoreDbPromise).getAllKeys(scrollPositionTableName);
  },
};

export function useScrollRestore(elementId: string) {
  const restoreScroll = React.useCallback(() => {
    const element = document.getElementById(elementId);
    if (element) {
      scrollRestoreDb.get(resolveRowKey()).then((scrollLast) => {
        element.scrollTop = scrollLast ?? 0;
      });
    }
  }, [elementId]);
  const saveScroll = React.useCallback(() => {
    const element = document.getElementById(elementId);
    if (element) {
      scrollRestoreDb.set(resolveRowKey(), element.scrollTop);
    }
  }, [elementId]);

  React.useEffect(() => {
    const scrollInterval = setInterval(saveScroll, 400);
    window.addEventListener("popstate", restoreScroll);
    return () => {
      clearInterval(scrollInterval);
      // Add deley to popstate b/c race condition
      setTimeout(() => {
        window.removeEventListener("popstate", restoreScroll);
      }, 1000);
    };
  }, [restoreScroll, saveScroll]);
}

function resolveRowKey() {
  return `scroll-${window.location.pathname}${window.location.hash && "#" + window.location.hash}`;
}

// export function scrollToTop() {
//   scrollRestoreDb.set(getCurrentScrollKey(), 0);
//   scrollElement.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }
