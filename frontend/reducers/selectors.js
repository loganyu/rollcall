export const selectClub = ({ clubs }, clubId) => {
  return clubs[clubId] || { memberIds: [] };
};

export const selectMembersForClub = ({ clubs, users }, club) => {
  const members = []
  club.memberIds.forEach(memberId => {
    if (users[memberId]) {
      members.push(users[memberId]);
    }
  });

  return members;
};

export const asArray = ({ clubs }) => (
  Object.keys(clubs).map(key => clubs[key])
);
