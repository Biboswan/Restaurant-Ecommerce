import { combineReducers } from 'redux';
import localitiesReducer from './localitiesReducer';

export default combineReducers({ localities: localitiesReducer });
