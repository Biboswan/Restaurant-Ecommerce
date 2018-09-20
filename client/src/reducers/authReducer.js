import { FETCH_USER, UPDATE_CART_KNOWN, SUBMIT_ORDER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case UPDATE_CART_KNOWN:
      return { ...action.payload };
    case SUBMIT_ORDER:
      return { ...state, cart: { count: 0, items: {} } };
    default:
      return state;
  }
}
