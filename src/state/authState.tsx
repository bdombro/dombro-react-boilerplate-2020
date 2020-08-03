import { atom } from "recoil";

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

export type authStateValue = {
  username: string;
  token: string;
  displayName: string;
  avatar: string;
  permissions: string[];
};
