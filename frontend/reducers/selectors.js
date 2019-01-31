export const selectClub = ({ clubs }, clubId) => {
  return clubs[clubId] || { reviewIds: [] };
};

export const asArray = ({ clubs }) => (
  Object.keys(clubs).map(key => clubs[key])
);
