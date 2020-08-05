import { atom } from "recoil";

import { authStateValue } from "./types";

export const authDefaultValue: authStateValue = {
  username: "",
  token: "",
  displayName: "",
  avatar: "",
  permissions: [],
};

export const AuthState = atom<authStateValue>({
  key: "AuthState",
  default: authDefaultValue,
});
