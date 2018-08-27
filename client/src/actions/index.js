import axios from 'axios';
import { FETCH_LOCALITIES } from './types';

export const fetchLocalities = () => async dispatch => {
  const res = await axios.get('/api/localities');
  let localities = {};
  res.data.forEach(element => {
    let locality = element.locality;
    localities[locality] = '';
  });
  dispatch({ type: FETCH_LOCALITIES, payload: localities });
};
