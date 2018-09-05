import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import localitiesReducer from './localitiesReducer';
import foodmenuReducer from './foodmenuReducer';
import authReducer from './authReducer';
import unknownCartReducer from './unknownCartReducer';
import phone_numberReducer from './phone_numberReducer';

export default combineReducers({
  localities: localitiesReducer,
  foodmenu: foodmenuReducer,
  auth: authReducer,
  unknowncart: unknownCartReducer,
  form: formReducer,
  verifiednumber: phone_numberReducer,
});
