import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events,
});

export const receiveEvent = ({ club, event, owner }) => ({
  type: RECEIVE_EVENT,
  club,
  event,
  owner,
});

export const createEvent = (clubId, eventForm) => dispatch => (
  APIUtil.createEvent(clubId, eventForm).then((eventData) => (
    dispatch(receiveEvent(eventData))
  ))
);

export const removeEvent = ({ club, event }) => ({
  type: REMOVE_EVENT,
  club,
  event,
});

export const fetchEvents = (clubId) => dispatch => (
  APIUtil.fetchEvents(clubId).then(events => (
    dispatch(receiveEvents(events))
  ))
);

export const fetchEvent = (clubId, id) => dispatch => (
  APIUtil.fetchEvent(clubId, id).then(eventData => (
    dispatch(receiveEvent(eventData))
  ))
);

export const updateEvent = (clubId, eventId, event) => dispatch => (
  APIUtil.updateEvent(clubId, eventId, event).then(eventData => (
    dispatch(receiveEvent(eventData))
  ))
);

export const destroyEvent = (clubId, eventId) => dispatch => (
  APIUtil.destroyEvent(clubId, eventId).then((eventData) => (
    dispatch(removeEvent(eventData))
  ))
);
