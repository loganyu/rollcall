import React from 'react';
import { Link } from 'react-router-dom';

import EventDetail from './event_detail';
import EventComments from './event_comments';

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

    this.props.history.push({
      pathname: `/clubs/${clubId}/events/edit/${eventId}`,
      search: Object.entries(event).map(([k,v]) => `${k}=${v}`).join('&'),
    });
  }

  componentDidMount() {
    this.props.fetchEvent().then(() => {
      this.props.fetchEventComments();
    });
  }

  render() {
    const {
      users,
      eventId,
      event,
      clubId,
      club,
      currentUser,
      owner,
      comments,
      createEventFollow,
      destroyEventFollow,
      createEventComment,
      destroyEventComment,
    } = this.props;
    const isOwner = currentUser !== undefined && owner !== undefined && currentUser.id === owner.id;  
    const isFollowing = currentUser !== undefined && currentUser.eventFollowingIds.includes(eventId);
    const isAdmin = currentUser !== undefined && (club.adminIds.includes(currentUser.id) || isOwner);
    const isMember = currentUser !== undefined && club.memberIds.includes(currentUser.id);

    return (
      <div className="single-event-show">
        <div className='club-details'>
          <Link to={`/clubs/${clubId}`}>{club.name}</Link>
        </div>
        <div className="event-details">
          <EventDetail event={event} owner={owner} />
        </div>
        <div className="options-section">
          {isFollowing ?
            <button
              className="button"
              onClick={destroyEventFollow}>
              Unfollow Event
            </button>
            :
            <button
              className="button"
              onClick={createEventFollow}>
              Follow Event
            </button>
          }
          {isOwner &&
            <button
              className="edit-button"
              onClick={this.handleEditEvent}>
              Edit Event
            </button>
          }
          {isOwner &&
            <button
              className="delete-button"
              onClick={this.handleDestroyEvent}>
              Delete
            </button>
          }
        </div>
        <div className="comments-section">
          <EventComments
            users={users}
            comments={comments}
            createEventComment={createEventComment}
            destroyEventComment={destroyEventComment}
            isMember={isMember}
            isAdmin={isAdmin}
            currentUser={currentUser}
          />
        </div>
      </div>
    );
  }
}

export default EventShow;
