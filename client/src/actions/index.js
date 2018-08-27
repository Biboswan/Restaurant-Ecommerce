import axios from 'axios';
import { FETCH_LOCALITIES, FETCH_FOODMENU } from './types';

export const fetchLocalities = () => async dispatch => {
  const res = await axios.get('/api/localities');
  let localities = {};
  res.data.forEach(element => {
    let locality = element.locality;
    localities[locality] = '';
  });
  dispatch({ type: FETCH_LOCALITIES, payload: localities });
};

export const fetchFoodMenu = () => async dispatch => {
  const res = await axios.get('/api/menu');
  dispatch({ type: FETCH_FOODMENU, payload: res.data });
};
