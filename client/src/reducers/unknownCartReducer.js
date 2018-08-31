import { UPDATE_CART_UNKNOWN, DELETE_CART_UNKNOWN } from '../actions/types';

export default function(state = { items: {}, count: 0 }, action) {
  switch (action.type) {
    case UPDATE_CART_UNKNOWN:
      return { ...action.payload };
    case DELETE_CART_UNKNOWN:
      return { items: {}, count: 0 };
    default:
      return state;
  }
}
