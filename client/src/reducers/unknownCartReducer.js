import { UPDATE_CART_UNKNOWN, UPDATE_CART_KNOWN } from '../actions/types';

export default function(state = { items: {}, count: 0 }, action) {
  switch (action.type) {
    case UPDATE_CART_UNKNOWN:
      return { ...action.payload };
    case UPDATE_CART_KNOWN:
      return { items: {}, count: 0 };
    default:
      return state;
  }
}
