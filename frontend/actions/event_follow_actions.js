import * as APIUtil from '../util/event_follow_api_util';

export const RECEIVE_EVENT_FOLLOW = 'RECEIVE_EVENT_FOLLOW';
export const REMOVE_EVENT_FOLLOW = 'REMOVE_EVENT_FOLLOW';

export const receiveEventFollow = ({ user_id, event_id }) => ({
  type: RECEIVE_EVENT_FOLLOW,
  user_id,
  event_id,
});

export const removeEventFollow = ({ user_id, event_id }) => ({
  type: REMOVE_EVENT_FOLLOW,
  user_id,
  event_id,
});

export const createEventFollow = (eventId) => dispatch => (
  APIUtil.createEventFollow(eventId).then((eventFollowData) => (
    dispatch(receiveEventFollow(eventFollowData))
  ))
);

export const destroyEventFollow = (eventId) => dispatch => (
  APIUtil.destroyEventFollow(eventId).then((eventFollowData) => (
    dispatch(removeEventFollow(eventFollowData))
  ))
);
