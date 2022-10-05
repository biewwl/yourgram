import { getUser } from '../../mocks/fakeUsers';

const initialState = {
  ...getUser('lolcat'),
};

export const CHANGE_IMAGES = 'CHANGE_IMAGES';

export default function user(state = initialState, action) {
  switch (action.type) {
    case CHANGE_IMAGES:
      return {
        ...state,
        header: action.payload.header,
        avatar: action.payload.avatar,
      }
  
    default:
      break;
  }
  return state;
}
