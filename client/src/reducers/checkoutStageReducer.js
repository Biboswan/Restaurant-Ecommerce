import {
  DONE_DELIVERY_ADDRESS,
  ADD_VERIFIED_PHONE_NUMBER,
  EDIT_VERIFIED_PHONE_NUMBER,
  EDIT_DELIVERY_ADDRESS,
} from '../actions/types';

export default function(
  state = { step1: 'undone', step2: 'undone', step3: 'undone' },
  action
) {
  switch (action.type) {
    case ADD_VERIFIED_PHONE_NUMBER:
      return { ...state, step1: 'done' };
    case DONE_DELIVERY_ADDRESS:
      return { ...state, step2: 'done' };
    case EDIT_VERIFIED_PHONE_NUMBER:
      return { ...state, step1: 'undone', step2: 'undone' };
    case EDIT_DELIVERY_ADDRESS:
      return { ...state, step2: 'undone' };
    default:
      return state;
  }
}
