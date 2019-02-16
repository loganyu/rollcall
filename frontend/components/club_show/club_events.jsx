import React from 'react';
import { withRouter } from 'react-router-dom';

class ClubEvents extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(eventId) {
    const { clubId } = this.props;
    this.props.history.push(`/clubs/${clubId}/events/${eventId}`);
  }

  render() {
    const { events, clubId, isAdmin } = this.props;
    const eventsList = (events) => (
      events.map(event => (
        <div key={event.id} className="event-container" onClick={() => this.handleClick(event.id)}>
          <ul className="event-details">
            <li>{event.start_time}</li>
            <li><h2>{event.name}</h2></li>
            <li>{event.address}</li>
            <li>{event.followerIds.length} following</li>  
          </ul>
        </div>
      ))
    );


    return (
      <div className="events">
        {eventsList(events)}
      </div>
    );
  }
};

export default withRouter(ClubEvents);
