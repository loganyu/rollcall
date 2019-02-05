import { combineReducers } from 'redux';

import users from './users_reducer';
import clubs from './clubs_reducer';
import events from './events_reducer';

export default combineReducers({
  users,
  clubs,
  events,
});
