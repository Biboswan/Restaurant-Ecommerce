import { ADD_VERIFIED_PHONE_NUMBER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case ADD_VERIFIED_PHONE_NUMBER:
      return action.payload;
    default:
      return state;
  }
}
