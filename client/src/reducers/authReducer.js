import { FETCH_USER, UPDATE_CART_KNOWN } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case UPDATE_CART_KNOWN:
      return { ...action.payload };
    default:
      return state;
  }
}
