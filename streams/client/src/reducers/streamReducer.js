import _ from 'lodash';

import {
  CREATE_STREAM,
  EDIT_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM
} from '../actions/types.js';
import streams from '../apis/streams.js';

export default (state = {}, action) => {
  switch(action.type) {
    case CREATE_STREAM:
    case EDIT_STREAM:
    case FETCH_STREAM:
        return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);  // Returns a new object 👍
    default:
      return state;
  }
};
