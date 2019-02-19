import React from 'react';

const EventDetail = ({ event, owner }) => {
  const { name, address, description, next_occurrence_time_string,
    recurrence_rule_description } = event;

  return (
    <div>
      <ul className="club-list">
        <li><h2>{name}</h2></li>
        <li>{next_occurrence_time_string}</li>
        <li>{address}</li>
        <li>{description}</li>
        <li>{recurrence_rule_description}</li>
        <li>organizer: {owner && owner.email} </li>
      </ul>
      <br />
    </div>
  );
};

export default EventDetail;
