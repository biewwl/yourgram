import { getUser } from "../../mocks/fakeUsers";
import { CHANGE_IMAGES, LOGIN, LOGOUT } from "../reducers/userReducer";

export const changeImages = (header, avatar) => ({
  type: CHANGE_IMAGES,
  payload: {
    header,
    avatar,
  },
});

export const loginUser = (nick) => ({
  type: LOGIN,
  payload: {
    ...getUser(nick),
  },
});

export const logoutUser = (nick) => ({
  type: LOGOUT,
});
