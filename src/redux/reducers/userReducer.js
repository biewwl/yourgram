import { getUser } from '../../mocks/fakeUsers';

const initialState = {
  ...getUser('lolcat'),
};

export default function user(state = initialState, action) {
  return state;
}
