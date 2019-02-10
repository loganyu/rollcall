export const fetchEventComments = (eventId) => (
  $.ajax({
    method: 'GET',
    url: `api/events/${eventId}/event_comments`,
  })
);

export const createEventComment = (eventId, eventCommentForm) => (
  $.ajax({
    method: 'POST',
    url: `api/events/${eventId}/event_comments`,
    data: eventCommentForm,
    contentType: false,
    processData: false,
  })
);

export const updateEventComment = (eventId, eventCommentId, eventCommentForm) => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${eventId}/event_comments/${eventCommentId}`,
    data: eventCommentForm,
    contentType: false,
    processData: false,
  })
);

export const destroyEventComment = (eventId, eventCommentId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/clubs/${eventId}/event_comments/${eventCommentId}`,
  })
);