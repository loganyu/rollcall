import React from 'react';
import { Link } from 'react-router-dom';

import EventDetail from './event_detail';

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDestroyEvent = this.handleDestroyEvent.bind(this);
    this.handleEditEvent = this.handleEditEvent.bind(this);
  }

  handleDestroyEvent() {
    const { clubId } = this.props;
    this.props.destroyEvent().then(() => {
      this.props.history.push(`/clubs/${clubId}`);
    });
  }

  handleEditEvent() {
    const { clubId, eventId, event } = this.props;
    const { name, address, description } = event;

    this.props.history.push({
      pathname: `/clubs/${clubId}/events/edit/${eventId}`,
      search: Object.entries(event).map(([k,v]) => `${k}=${v}`).join('&'),
    });
  }

  componentDidMount() {
    this.props.fetchEvent();
  }

  render() {
    const {
      eventId,
      event,
      clubId,
      club,
      currentUser,
      owner,
    } = this.props;
    const isOwner = currentUser !== undefined && owner !== undefined && currentUser.id === owner.id;

    return (
      <div className="single-event-show">
        <Link to={`/clubs/${clubId}`}>Back to Club </Link>
        <div className="event-details">
          <EventDetail event={event} owner={owner} />
        </div>
        {currentUser && (isOwner) &&
          <button
            className="edit-button"
            onClick={this.handleEditEvent}>
            Edit Event
          </button>
        }
        {currentUser && isOwner &&
          <button
            className="delete-button"
            onClick={this.handleDestroyEvent}>
            Delete
          </button>
        }
      </div>
    );
  }
}

export default EventShow;
