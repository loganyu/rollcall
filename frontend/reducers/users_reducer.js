import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_CLUB,
} from '../actions/club_actions';
import {
  RECEIVE_EVENT,
} from '../actions/event_actions';
import {
  RECEIVE_EVENT_FOLLOW,
  REMOVE_EVENT_FOLLOW,
} from '../actions/event_follow_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_CLUB:
      return merge({}, state, action.members, action.admins, {[action.owner.id]: action.owner});
    case RECEIVE_EVENT:
      return merge({}, state, { [action.owner.id]: action.owner });
    case RECEIVE_EVENT_FOLLOW:
      nextState[action.user_id].eventFollowingIds.push(action.event_id);
      return nextState;
    case REMOVE_EVENT_FOLLOW:
      const eventFollowingIds = nextState[action.user_id].eventFollowingIds.
        filter(eventId => eventId !== action.event_id);
      nextState[action.user_id].eventFollowingIds = eventFollowingIds;
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;
