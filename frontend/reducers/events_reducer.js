import merge from 'lodash/merge';

import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT,
} from '../actions/event_actions';
import { RECEIVE_CLUB } from '../actions/club_actions';
import {
  RECEIVE_EVENT_FOLLOW,
  REMOVE_EVENT_FOLLOW,
} from '../actions/event_follow_actions';

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
    case RECEIVE_EVENT_FOLLOW:
      nextState[action.event_id].followerIds.push(action.user_id);
      return nextState;
    case REMOVE_EVENT_FOLLOW:
      const followerIds = nextState[action.event_id].followerIds.
        filter(userId => userId !== action.user_id);
      nextState[action.event_id].followerIds = followerIds;
      return nextState;
    default:
      return state;
  }
};

export default eventsReducer;
