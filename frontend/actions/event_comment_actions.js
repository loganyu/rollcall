import * as APIUtil from '../util/event_comment_api_util';

export const RECEIVE_EVENT_COMMENTS = 'RECEIVE_EVENT_COMMENTS';
export const RECEIVE_EVENT_COMMENT = 'RECEIVE_EVENT_COMMENT';
export const REMOVE_EVENT_COMMENT = 'REMOVE_EVENT_COMMENT';

export const receiveEventComments = eventComments => ({
  type: RECEIVE_EVENT_COMMENTS,
  eventComments,
});

export const receiveEventComment = eventComment => ({
  type: RECEIVE_EVENT_COMMENT,
  eventComment,
});

export const removeEventComment = (eventId, eventCommentId) => ({
  type: REMOVE_EVENT_COMMENT,
  eventId,
  eventCommentId,
});

export const createEventComment = (eventId, eventCommentForm) => dispatch => (
  APIUtil.createEventComment(eventId, eventCommentForm).then((eventComment) => (
    dispatch(receiveEventComment(eventComment))
  ))
);

export const fetchEventComments = (eventId) => dispatch => (
  APIUtil.fetchEventComments(eventId).then(eventComments => (
    dispatch(receiveEventComments(eventComments))
  ))
);

export const updateEventComment = (eventId, eventCommentId, eventComment) => dispatch => (
  APIUtil.updateEventComment(eventId, eventCommentId, eventComment).then(eventComment => (
    dispatch(receiveEvent(eventComment))
  ))
);

export const destroyEventComment = (eventId, eventCommentId) => dispatch => (
  APIUtil.destroyEventComment(eventId, eventCommentId).then((eventCommentData) => (
    dispatch(removeEvent(eventCommentData))
  ))
);
