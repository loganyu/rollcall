export const selectClub = ({ clubs }, clubId) => {
  return clubs[clubId] || { memberIds: [], adminIds: [], eventIds: [], ownerId: null };
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

export const selectEventsForClub = ({ events }, club) => {
  const clubEvents = [];
  club.eventIds.forEach(eventId => {
    if (events[eventId]) {
      clubEvents.push(events[eventId]);
    }
  });

  return clubEvents;
};

export const selectOwnerForClub = ({ users }, club) => {
  const owner = users[club.owner_id];

  return owner;
};

export const asArray = ({ clubs }) => (
  Object.keys(clubs).map(key => clubs[key])
);

export const selectEvent = ({ events }, eventId) => {
  return events[eventId] || { };
};

export const selectOwnerForEvent = ({ users }, event) => {
  const owner = users[event.user_id]

  return owner;
};

export const selectCommentsForEvent = ({ eventComments }, event) => {
  const comments =  Object.keys(eventComments).
    filter(id => eventComments[id].event_id === event.id).
    reduce((obj, id) => {
      obj[id] = eventComments[id];
      return obj;
    }, {});

    return comments;
};