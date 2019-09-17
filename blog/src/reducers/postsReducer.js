export default (state = [], action) => {
  switch(action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    // Other case statements...
    default:
      return state;
  }
};
