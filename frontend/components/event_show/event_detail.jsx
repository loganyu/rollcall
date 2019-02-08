import React from 'react';

const EventDetail = ({ event, owner }) => {
  const { name, address, description, start_time } = event;

  return (
    <div>
      <ul className="club-list">
        <li>Name: {name} </li>
        <li>Address: {address} </li>
        <li>Description: {description}</li>
        <li>Start Time: {start_time}</li>
        <li>owner: {owner && owner.email} </li>
      </ul>
      <br />
    </div>
  );
};

export default EventDetail;
