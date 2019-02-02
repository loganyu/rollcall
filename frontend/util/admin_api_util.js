export const createAdmin = (clubId, adminForm) => (
  $.ajax({
    method: 'POST',
    url: `api/clubs/${clubId}/admins`,
    data: adminForm,
    contentType: false,
    processData: false,
  })
);

export const destroyAdmin = (clubId, adminId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/clubs/${clubId}/admins/${adminId}`,
  })
);
