import { FETCH_LOCALITIES } from '../actions/types';

export default function(state = [], action) {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_LOCALITIES:
      return action.payload;
    default:
      return state;
  }
}
