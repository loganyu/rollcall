export const fetchEvents = (clubId, data) => (
  $.ajax({
    method: 'GET',
    url: `api/clubs/${clubId}/members`,
    data
  })
);

export const fetchEvent = (clubId, eventId) => (
  $.ajax({
    method: 'GET',
    url: `/api/clubs/${clubId}/events/${eventId}`
  })
);

export const createEvent = (clubId, eventForm) => (
  $.ajax({
    method: 'POST',
    url: `api/clubs/${clubId}/events`,
    data: eventForm,
    contentType: false,
    processData: false,
  })
);

export const updateEvent = (clubId, eventId, eventForm) => (
  $.ajax({
    method: 'POST',
    url: `api/clubs/${clubId}/events/${eventId}`,
    data: eventForm,
    contentType: false,
    processData: false,
  })
);

export const destroyEvent = (clubId, eventId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/clubs/${clubId}/events/${eventId}`,
  })
);
