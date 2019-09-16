import jsonPlaceholder from '../apis/jsonPlaceholder.js';

/**
 * @method fetchPosts
 * @summary Action creator
 *
 * @returns {Object} - action
*/
export const fetchPosts = () => {
  // Bad approach!
  const promise = jsonPlaceholder.get('/posts');

  return {
    type: 'FETCH_POSTS',
    payload: promise  // Promise sent to reducers instead of response; not good
  };
};
