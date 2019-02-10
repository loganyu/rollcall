import { combineReducers } from 'redux';

import users from './users_reducer';
import clubs from './clubs_reducer';
import events from './events_reducer';
import eventComments from './event_comments_reducer';

export default combineReducers({
  users,
  clubs,
  events,
  eventComments,
});
