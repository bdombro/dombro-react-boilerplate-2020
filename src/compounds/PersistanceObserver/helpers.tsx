import { RecoilRootProps } from "recoil/dist";

import { AuthState } from "../../state/authState";

export const statesToPersist = [AuthState];

export const initializeState: RecoilRootProps["initializeState"] = ({ set }) => {
  statesToPersist.forEach((s) => {
    const stored = localStorage.getItem(s.key);
    if (stored !== null) set(s, JSON.parse(stored));
  });
};
