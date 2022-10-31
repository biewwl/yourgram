import lS from "manager-local-storage";
import { getFullUser } from "../mocks/fakeUsers";

export const createLoginUser = (newLogin) => {
  const currentLogins = lS.get("biewwl-created-logins") ?? [];
  const updatedLogins = [
    ...currentLogins,
    {
      ...newLogin,
      avatar:
        "https://jacksonvillepartycompany.com/wp-content/uploads/2018/10/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
      verified: false,
      header: "https://pbs.twimg.com/media/DCU4xoLVwAAJWhH.jpg",
    },
  ];
  lS.set("biewwl-created-logins", updatedLogins);
};

export const loginUser = (nickOrEmail, password) => {
  const user = getFullUser(nickOrEmail);
  if (!user) return { message: "User not found!" };
  if (user.password !== password) return { message: "Wrong password!" };
  return { login: user.nick };
};
