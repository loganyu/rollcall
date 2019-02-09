export const createEventFollow = (eventId) => (
  $.ajax({
    method: 'POST',
    url: `api/events/${eventId}/event_follows`,
  })
);

export const destroyEventFollow = (eventId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${eventId}/event_follows`,
  })
);
