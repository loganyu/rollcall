export const selectClub = ({ clubs }, clubId) => {
  return clubs[clubId] || { memberIds: [], adminIds: [] };
};

export const selectMembersForClub = ({ users }, club) => {
  const members = [];
  club.memberIds.forEach(memberId => {
    if (users[memberId]) {
      members.push(users[memberId]);
    }
  });

  return members;
};

export const selectAdminsForClub = ({ users }, club) => {
  const admins = [];
  club.adminIds.forEach(adminId => {
    if (users[adminId]) {
      admins.push(users[adminId]);
    }
  });

  return admins;
};

export const asArray = ({ clubs }) => (
  Object.keys(clubs).map(key => clubs[key])
);
