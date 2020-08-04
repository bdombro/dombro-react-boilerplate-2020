import { atom } from "recoil";

import { authStateValue } from "./types";

export const authDefaultValue: authStateValue = {
  username: "",
  token: "",
  displayName: "",
  avatar: "",
  permissions: [],
};

export const authState = atom<authStateValue>({
  key: "authState",
  default: authDefaultValue,
});
