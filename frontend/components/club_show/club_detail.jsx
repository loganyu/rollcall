import React from 'react';

const ClubDetail = ({ club }) => {
  const { name, city, description } = club;

  return (
    <div>
      <ul className="club-list">
        <li>Name: {name} </li>
        <li>Location: {city} </li>
        <li>Description: {description}</li>
      </ul>
      <br />
    </div>
  );
};

export default ClubDetail;
