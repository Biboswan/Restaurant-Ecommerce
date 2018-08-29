import { combineReducers } from 'redux';
import localitiesReducer from './localitiesReducer';
import foodmenuReducer from './foodmenuReducer';
import authReducer from './authReducer';
import unknownCartReducer from './unknownCartReducer';

export default combineReducers({
  localities: localitiesReducer,
  foodmenu: foodmenuReducer,
  auth: authReducer,
  unknowncart: unknownCartReducer,
});
