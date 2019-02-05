import merge from 'lodash/merge';

import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT,
} from '../actions/event_actions';
import { RECEIVE_CLUB } from '../actions/club_actions';

const eventsReducer = (state = {}, action) => {
  let nextState = merge({}, state);
  let newEvent;

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      newEvent = { [action.event.id]: action.event };
      return merge({}, state, newEvent);
    case REMOVE_EVENT:
      delete nextState[action.event.id];
      return nextState;
    case RECEIVE_CLUB:
      return merge({}, state, action.events);
    default:
      return state;
  }
};

export default eventsReducer;
