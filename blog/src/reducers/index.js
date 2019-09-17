import { combineReducers } from 'redux';
import postsReducer from './postsReducer.js';
import usersReducer from './usersReducer.js';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
