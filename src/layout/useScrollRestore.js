/**
 * Intelligent, low-sideeffect way to restore scroll position
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// TODO: Add param to indicate which element id to target.
export function useScrollRestore() {
  const location = useLocation();
  useEffect(() => {
    const intervalNumber = setInterval(setScroll, 400);
    return () => clearInterval(intervalNumber);

    function setScroll() {
      localStorage.setItem(
        `scroll-${window.location.pathname}${
          window.location.hash && "#" + window.location.hash
        }`,
        `${document.getElementById("scroll-div")?.scrollTop ?? 0}`
      );
    }
  }, []);
  useEffect(() => {
    const scrollLast = localStorage.getItem(
      `scroll-${window.location.pathname}${
        window.location.hash && "#" + window.location.hash
      }`
    );
    document.getElementById("scroll-div").scrollTop = scrollLast ?? 0;
  }, [location]);
}

export function scrollToTop() {
  localStorage.setItem(
    `scroll-${window.location.pathname}${
      window.location.hash && "#" + window.location.hash
    }`,
    0
  );
  document.getElementById("scroll-div").scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// export class Link extends RLink {
//   constructor(...props) {
//     super(...props);
//     // TODO: Interpret props into pathname + hash
//     // TODO: Push target to history stack
//     // TODO: Do same for NavLink
//   }
// }

// TODO: Store scroll position in a indexeddb (using idb package) stack/queue instead of by url hash table, so that the same page can have multiple scroll restore history - https://www.npmjs.com/package/idb#article-store
// TODO: On location change, pop most recent scroll restore from stack for the url
// TODO: HOw to handle multiple browser tabs -- maybe create a sep history db per tab?

// STACK STUFF
// TODO: If naving forward to a route already in the stack, need to save both scroll positions
