export default (state = [], action) => {
  switch(action.item) {
    case 'FETCH_USER':
      return [ ...state, action.payload ];
    default:
      return state;
  }
};
