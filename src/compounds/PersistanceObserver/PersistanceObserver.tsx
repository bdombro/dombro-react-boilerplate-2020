import { isEqual } from "lodash-es";
import React from "react";
import { useRecoilTransactionObserver_UNSTABLE } from "recoil/dist";

import { AuthState } from "../../state/authState";
import { statesToPersist } from "./helpers";

export function PersistenceObserver() {
  useRecoilTransactionObserver_UNSTABLE((opts) => {
    const { snapshot, previousSnapshot } = opts;
    statesToPersist.forEach((s) => {
      const prev = previousSnapshot.getLoadable(AuthState).contents;
      const now = snapshot.getLoadable(AuthState).contents;
      if (!isEqual(now, prev)) {
        localStorage.setItem(s.key, JSON.stringify(now));
      }
    });
  });
  return <></>;
}
export default PersistenceObserver;
