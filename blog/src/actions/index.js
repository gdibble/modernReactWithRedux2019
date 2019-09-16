import jsonPlaceholder from '../apis/jsonPlaceholder.js';

/**
 * @method fetchPosts
 * @summary Action creator
 *
 * @returns {Object} - action
*/
export const fetchPosts = async () => {
  // Bad approach!
  const response = await jsonPlaceholder.get('/posts');

  return {
    type: 'FETCH_POSTS',
    payload: response
  };
};
