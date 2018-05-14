import { combineReducers } from 'redux';
import userReducer from './userReducer';
import mathReducer from './mathReducer';

export default combineReducers({
  mathReducer,
  userReducer
});