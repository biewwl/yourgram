import { getFullUser } from "../../mocks/fakeUsers";
import { CHANGE_INFOS, LOGIN, LOGOUT } from "../reducers/userReducer";

export const changeImages = (newInfos) => ({
  type: CHANGE_INFOS,
  payload: {
    ...newInfos,
  },
});

export const loginUser = (nick) => ({
  type: LOGIN,
  payload: {
    ...getFullUser(nick),
  },
});

export const logoutUser = (nick) => ({
  type: LOGOUT,
});
