import { FETCH_FOODMENU } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_FOODMENU:
      return action.payload;
    default:
      return state;
  }
}
