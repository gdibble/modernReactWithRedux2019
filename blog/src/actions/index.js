import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder.js';

/**
 * @method fetchPosts
 * @summary Action creator
 *
 * @returns {Object} - action
*/
export const fetchPosts = () => async dispatch => {  // (dispatch, getState)
  const response = await jsonPlaceholder.get('/posts');
  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
};

/**
 * @method fetchUser
 * @summary Action creator
 *
 * @returns {Object} - action
*/
export const fetchUser = userId => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
};

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//   // Unfortunately this will only ever fetch each user once, regardless of changes to that user
//   const response = await jsonPlaceholder.get(`/users/${userId}`);
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   });
// });
// export const fetchUser = userId => dispatch => _fetchUser(userId, dispatch);


/**
 * @method fetchPostsAndUsers
 * @summary Action creator
 *
 * @returns {Object} - action
*/
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(userId => dispatch(fetchUser(userId)));
};
