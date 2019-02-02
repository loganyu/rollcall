import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_CLUB,
} from '../actions/club_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_CLUB:
      return merge({}, state, action.members, action.admins, {[action.owner.id]: action.owner});
    default:
      return state;
  }
};

export default usersReducer;
