import { atom } from "recoil";

import { AuthStateType } from "./types";

export const authDefaultValue: AuthStateType = {
  email: "",
  username: "",
  token: "",
  givenName: "",
  surname: "",
  avatar: "",
  permissions: [],
};

export const AuthState = atom<AuthStateType>({
  key: "AuthState",
  default: authDefaultValue,
});
