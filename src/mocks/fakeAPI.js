import fakeUsers, { getFullUser, verifyExistUser } from "./fakeUsers";

export const fakeAPI = {
  post: {
    login: (nickOrEmail, password) => {
      const user = getFullUser(nickOrEmail);
      if (!user) return { message: "User not found!" };
      console.log(user);
      if (user.password !== password) return { message: "Wrong password!" };
      return { login: user.nick };
    },
    createUser: (nick, email, password, user) => {
      const { existEmail } = verifyExistUser(user, email);
      if (existEmail) return { message: "E-mail already registered!" };
      const newUser = {
        user,
        email,
        password,
        avatar:
          "https://jacksonvillepartycompany.com/wp-content/uploads/2018/10/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
        verified: false,
        nick,
        header: "https://pbs.twimg.com/media/DCU4xoLVwAAJWhH.jpg",
      };
      fakeUsers.push(newUser);
      return { login: newUser };
    },
  },
};
