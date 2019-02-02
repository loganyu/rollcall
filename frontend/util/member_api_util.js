export const createMember = (clubId, memberId) => (
  $.ajax({
    method: 'POST',
    url: `api/clubs/${clubId}/members`,
    data: {
      member_id: memberId,
    },
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
