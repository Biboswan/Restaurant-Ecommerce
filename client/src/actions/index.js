import axios from 'axios';
import {
  FETCH_LOCALITIES,
  FETCH_FOODMENU,
  FETCH_USER,
  UPDATE_CART_KNOWN,
  UPDATE_CART_UNKNOWN,
} from './types';

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

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const updateAddToCart = ({ item_name, price }) => async (
  dispatch,
  getState
) => {
  console.log('hh');
  const { auth, unknowncart } = getState();
  switch (auth) {
    case false:
      console.log(unknowncart);
      if (unknowncart.items[item_name]) {
        unknowncart.items[item_name].quantity += 1;
      } else {
        unknowncart.items[item_name] = {};
        unknowncart.items[item_name].item_name = item_name;
        unknowncart.items[item_name].quantity = 1;
        unknowncart.items[item_name].price = price;
      }
      unknowncart.count += 1;
      dispatch({ type: UPDATE_CART_UNKNOWN, payload: unknowncart });
      break;
    default:
      if (auth.cart.items[item_name]) {
        auth.cart.items[item_name].quantity += 1;
      } else {
        auth.cart.items[item_name] = {};
        auth.cart.items[item_name].item_name = item_name;
        auth.cart.items[item_name].quantity = 1;
        auth.cart.items[item_name].price = price;
      }

      auth.cart.count += 1;
      await axios.post('/api/addtocart', { cart: auth.cart });
      dispatch({ type: UPDATE_CART_KNOWN, payload: auth });
  }
};

export const updateRemoveFromCart = ({ item_name }) => async (
  dispatch,
  getState
) => {
  console.log('hh');
  const { auth, unknowncart } = getState();
  switch (auth) {
    case false:
      console.log(unknowncart);
      console.log(auth);
      if (unknowncart.count === 1) {
        unknowncart.items = {};
      } else {
        if (unknowncart.items[item_name].quantity === 1)
          delete unknowncart.items[item_name];
        else unknowncart.items[item_name].quantity -= 1;
      }
      unknowncart.count -= 1;
      dispatch({ type: UPDATE_CART_UNKNOWN, payload: unknowncart });
      break;
    default:
      if (auth.cart.count === 1) {
        auth.cart.items = {};
      } else {
        if (auth.cart.items[item_name].quantity === 1)
          delete auth.cart.items[item_name];
        else auth.cart.items[item_name].quantity -= 1;
      }
      auth.cart.count -= 1;
      await axios.post('/api/addtocart', { cart: auth.cart });
      dispatch({ type: UPDATE_CART_KNOWN, payload: auth });
  }
};
