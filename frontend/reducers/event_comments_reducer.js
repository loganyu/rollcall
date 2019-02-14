import merge from 'lodash/merge';

import {
  RECEIVE_EVENT_COMMENTS,
  RECEIVE_EVENT_COMMENT,
  REMOVE_EVENT_COMMENT,
} from '../actions/event_comment_actions';

const eventCommentsReducer = (state = {}, action) => {
  let nextState = merge({}, state);
  let newEvent;

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_COMMENTS:
      return action.eventComments;
    case RECEIVE_EVENT_COMMENT:
      newEvent = { [action.event_comment.id]: action.event_comment };
      return merge({}, state, newEvent);
    case REMOVE_EVENT_COMMENT:
      delete nextState[action.event_comment.id];
      return nextState;
    default:
      return state;
  }
};

export default eventCommentsReducer;
