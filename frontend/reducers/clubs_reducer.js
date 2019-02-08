import merge from 'lodash/merge';

import {
  RECEIVE_CLUBS,
  RECEIVE_CLUB,
  REMOVE_CLUB,
} from '../actions/club_actions';
import { RECEIVE_MEMBER, REMOVE_MEMBER } from '../actions/member_actions';
import { RECEIVE_ADMIN, REMOVE_ADMIN } from '../actions/admin_actions';
import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT,
} from '../actions/event_actions';

const clubsReducer = (state = {}, action) => {
  let nextState = merge({}, state);
  let memberIds;
  let adminIds;
  let eventIds;
  let newClub;

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CLUBS:
      return action.clubs;
    case RECEIVE_CLUB || RECEIVE_EVENT:
      newClub = { [action.club.id]: action.club };
      return merge({}, state, newClub);
    case REMOVE_CLUB:
      delete nextState[action.club.id];
      return nextState;
    case RECEIVE_MEMBER:
      nextState[action.club.id].memberIds.push(action.member.id);
      return nextState;
    case REMOVE_MEMBER:
      memberIds = nextState[action.club.id].memberIds.filter(memberId => memberId !== action.member.id);
      nextState[action.club.id].memberIds = memberIds;
      return nextState;
    case RECEIVE_ADMIN:
      nextState[action.club.id].adminIds.push(action.admin.id);
      memberIds = nextState[action.club.id].memberIds.filter(memberId => memberId !== action.admin.id);
      nextState[action.club.id].memberIds = memberIds;
      return nextState;
    case REMOVE_ADMIN:
      adminIds = nextState[action.club.id].adminIds.filter(adminId => adminId !== action.admin.id);
      nextState[action.club.id].adminIds = adminIds;
      nextState[action.club.id].memberIds.push(action.admin.id);
      return nextState;
    case RECEIVE_EVENTS:
      nextState[action.club.id].eventIds = Object.keys(action.events);
      return nextState;
    case REMOVE_EVENT:
      eventIds = nextState[action.event.id].eventIds.filter(eventId => eventId !== action.event.id);
      nextState[action.club.id].eventIds = eventIds;
      return nextState;
    default:
      return state;
  }
};

export default clubsReducer;
