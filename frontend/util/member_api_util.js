export const createMember = (clubId, memberForm) => (
  $.ajax({
    method: 'POST',
    url: `api/clubs/${clubId}/members`,
    data: memberForm,
    contentType: false,
    processData: false,
  })
);

export const destroyMember = (clubId, memberId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/clubs/${clubId}/members/${memberId}`,
  })
);
