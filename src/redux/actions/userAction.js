import { CHANGE_IMAGES } from "../reducers/userReducer";

export const changeImages = (header, avatar) => ({
  type: CHANGE_IMAGES,
  payload: {
    header,
    avatar,
  },
});
