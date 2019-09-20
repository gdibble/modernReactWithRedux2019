import { combineReducers } from 'redux';
import { reducer } from 'redux-form';

import authReducer from './authReducer.js';

export default combineReducers({
  auth: authReducer,
  form: reducer
});
