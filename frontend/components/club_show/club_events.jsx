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
    const { events } = this.props;
    const eventsList = (events) => (
      events.sort((a, b) => a.next_occurrence_time - b.next_occurrence_time ).map(event => (
        <div key={event.id} className="event-container" onClick={() => this.handleClick(event.id)}>
          <ul className="event-details">
            <li><h2>{event.name}</h2></li>
            <li>{event.next_occurrence_time_string}</li>
            <li>{event.address}</li>
            <br />
            <li>{event.followerIds.length} following</li>
            <li>{event.recurrence_rule_description}</li>
          </ul>
        </div>
      ))
    );


    return (
      <div className="events">
        {events.length !== 0 ?
          eventsList(events)
        :
          <div>No Events</div>
        }
      </div>
    );
  }
};

export default withRouter(ClubEvents);
