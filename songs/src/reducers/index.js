/**
 * @method songsReducer
 * @summary Action creator
 *
 * @returns {Array} - songs
*/
export const songsReducer = song => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want It That Way', duration: '1:45' }
  ];
};


/**
 * @method selectedSongReducer
 * @summary Action creator
 *
 * @param {?Object} selectedSong
 * @param {Object} action
 *
 * @returns {Object} - song
*/
export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED')
    return action.payload;

  return selectedSong;
};
