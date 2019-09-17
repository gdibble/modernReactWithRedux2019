import { combineReducers } from 'redux';
import postsReducer from './postsReducer.js';

export default combineReducers({
  posts: postsReducer
});
