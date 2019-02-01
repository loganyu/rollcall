import React from 'react';

const membersList = (members) => (
  members.map(member => (
    <div key={member.id}>
      <ul>
        <li>Email: {member.email} </li>
      </ul>
    </div>
  ))
);

const ClubDetail = ({ club, members }) => {
  const { name, city, description } = club;

  return (
    <div>
      <ul className="club-list">
        <li>Name: {name} </li>
        <li>Location: {city} </li>
        <li>Description: {description}</li>
      </ul>
      <br />
      <div className="members">
        <h3>Club Members</h3>
        {membersList(members)}
      </div>
    </div>
  );
};

export default ClubDetail;
