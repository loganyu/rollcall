export const fetchClubs = data => (
  $.ajax({
    method: 'GET',
    url: 'api/clubs',
    data
  })
);

export const fetchClub = id => (
  $.ajax({
    method: 'GET',
    url: `api/clubs/${id}`
  })
);

export const createClub = clubForm => (
  $.ajax({
    method: 'POST',
    url: 'api/clubs',
    data: clubForm,
    contentType: false,
    processData: false
  })
);

