import React from 'react';
import { Link } from 'react-router-dom';

class ClubEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { events, clubId } = this.props;
    const eventsList = (events) => (
      events.map(event => (
        <div key={event.id}>
          <ul>
            <li><Link to={`/clubs/${clubId}/events/${event.id}`}>name: {event.name} </Link></li>
            <li>address: {event.address} </li>
            <li>description: {event.description} </li>
            <li>start_time: {event.start_time} </li>
          </ul>
        </div>
      ))
    );


    return (
      <div className="events">
        <h3>Events</h3>
        {eventsList(events)}
      </div>
    );
  }
};

export default ClubEvents;
