/**
 * @method selectSong
 * @summary Action creator
 *
 * @param {Object} song
 *
 * @returns {Object} - action
*/
export const selectSong = song => {
  return {
    type: 'SELECT_SONG',
    payload: song
  };
};
