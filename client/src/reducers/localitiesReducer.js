import { FETCH_LOCALITIES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LOCALITIES:
      return action.payload;
    default:
      return state;
  }
}
