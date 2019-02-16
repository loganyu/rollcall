import React from 'react';

const ClubDetail = ({ club, members }) => {
  const { name, city, description, adminIds, memberIds } = club;
  const numberOfRunners = adminIds.length + memberIds.length + 1; // owner

  return (
    <div>
      <div className="club-list">
        <span className="club-title">
          <h1>{name}</h1>
        </span>
        <span className="club-city">
          {city}
        </span>
        <span className="club-runners">
          {numberOfRunners} runners
        </span>
        <span className="club-description">{description}</span>
      </div>
      <br />
    </div>
  );
};

export default ClubDetail;
