import { atom } from "recoil";

import { AuthStateType } from "./types";

export const authDefaultValue: AuthStateType = {
  username: "",
  token: "",
  displayName: "",
  avatar: "",
  permissions: [],
};

export const AuthState = atom<AuthStateType>({
  key: "AuthState",
  default: authDefaultValue,
});
