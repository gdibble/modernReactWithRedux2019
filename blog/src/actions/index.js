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
  })
};

export const fetchUser = userId => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({
    type: 'USER',
    payload: response.data
  });
};
