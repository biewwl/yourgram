import lS from "manager-local-storage";

const logged = lS.get("biewwl-user-logged");
const loggedData = logged ?? {};
const isLogged = loggedData.user;

const initialState = {
  ...loggedData,
  status: isLogged,
};

export const CHANGE_INFOS = "CHANGE_INFOS";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export default function user(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INFOS:
      return {
        ...state,
        ...action.payload,
      };

    case LOGIN:
      lS.set("biewwl-user-logged", action.payload);
      return {
        ...state,
        status: true,
        ...action.payload,
      };

    case LOGOUT:
      lS.remove("biewwl-user-logged");
      return {
        status: false,
      };

    default:
      break;
  }
  return state;
}
