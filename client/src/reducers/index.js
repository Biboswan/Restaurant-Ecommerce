import { combineReducers } from 'redux';
import localitiesReducer from './localitiesReducer';
import foodmenuReducer from './foodmenuReducer';

export default combineReducers({
  localities: localitiesReducer,
  foodmenu: foodmenuReducer,
});
