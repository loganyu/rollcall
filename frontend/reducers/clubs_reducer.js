import merge from 'lodash/merge';

import {
  RECEIVE_CLUBS,
  RECEIVE_CLUB,
  REMOVE_CLUB,
} from '../actions/club_actions';

const clubsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CLUBS:
      return action.clubs;
    case RECEIVE_CLUB:
      const newClub = { [action.club.id]: action.club };
      return merge({}, state, newClub);
    case REMOVE_CLUB:
      let nextState = merge({}, state);
      delete nextState[action.club.id];
      return nextState;
    default:
      return state;
  }
};

export default clubsReducer;
