// import { getUser } from '../../mocks/fakeUsers';

const initialState = {
  // ...getUser('lolcat'),
  status: false,
};

export const CHANGE_IMAGES = 'CHANGE_IMAGES';
export const LOGIN = 'LOGIN';

export default function user(state = initialState, action) {
  switch (action.type) {
    case CHANGE_IMAGES:
      return {
        ...state,
        header: action.payload.header,
        avatar: action.payload.avatar,
      }

      case LOGIN:
        return {
          ...state,
          status: true,
          ...action.payload,
        }
  
    default:
      break;
  }
  return state;
}
