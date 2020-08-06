import { AuthStateType } from "./types";

export const adminPermissions = ["admin.dashboard"];
export const userPermissions = ["active.dashboard"];
export const adminUserAuth: AuthStateType = {
  email: "admin@example.com",
  username: "admin",
  token: "faketoken",
  givenName: "Admin",
  surname: "Foo",
  avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000", // Get sizes by adding ?s=200
  permissions: [...userPermissions, ...adminPermissions],
};
export const normalUserAuth: AuthStateType = {
  email: "nancy@example.com",
  username: "nancyDrew",
  token: "faketoken",
  givenName: "Nancy",
  surname: "Drew",
  avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50", // Get sizes by adding ?s=200
  permissions: userPermissions,
};
export const testUsers: AuthStateType[] = [adminUserAuth, normalUserAuth];
