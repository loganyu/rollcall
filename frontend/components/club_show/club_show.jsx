import React from 'react';
import { Link } from 'react-router-dom';

import ClubDetail from './club_detail';
import ClubMembers from './club_members';
import ClubAdmins from './club_admins';
import ClubEvents from './club_events';

class ClubShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDestroyClub = this.handleDestroyClub.bind(this);
    this.handleJoinClub = this.handleJoinClub.bind(this);
    this.handleLeaveClub = this.handleLeaveClub.bind(this);
    this.handleEditClub = this.handleEditClub.bind(this);
    this.handleCreateEvent = this.handleCreateEvent.bind(this);
  }

  handleDestroyClub() {
    this.props.destroyClub().then(() => {
      this.props.history.push('/');
    });
  }

  handleJoinClub() {
    if (!this.props.currentUser) {
      this.props.history.push('/login');
      return;
    }

    const formData = new FormData();
    formData.append('id', this.props.currentUser.id);
    this.props.createMember(formData);
  }

  handleLeaveClub() {
    this.props.destroyMember(this.props.currentUser.id);
  }

  handleEditClub() {
    const { club, clubId } = this.props;
    const { name, description, city } = club;

    this.props.history.push({
      pathname: `/clubs/edit/${clubId}`,
      search: `name=${name}&description=${description}&city=${city}`,
    });
  }

  handleCreateEvent() {
    this.props.history.push(`/clubs/${this.props.clubId}/events/new`);
  }

  componentDidMount() {
    this.props.fetchClub(this.props.clubId);
  }

  render() {
    const { club, clubId, members, admins, events, owner, currentUser, 
      destroyMember, createAdmin, destroyAdmin, destroyEvent }  = this.props;
    const isOwner = currentUser !== undefined && owner !== undefined && currentUser.id === owner.id;
    const isAdmin = currentUser !== undefined && (club.adminIds.includes(currentUser.id) || isOwner);
    const isMember = currentUser !== undefined  && club.memberIds.includes(currentUser.id);
    const userStatus = { currentUser, isOwner, isMember, isAdmin };
    
    return (
      <div className="single-club-container">
        <section className="details-section">
          <ClubDetail club={club} />
        </section>
        <section className="options-section">
          {(isOwner || isAdmin) &&
            <button
              className="join-button"
              onClick={this.handleCreateEvent}>
              Create Event
            </button>
          }
          {!isOwner && !isAdmin && !isMember &&
            <button
              className="join-button"
              onClick={this.handleJoinClub}>
              Join Club
            </button>
          }
          {(isMember || isAdmin) && !isOwner &&
            <button
              className="leave-button"
              onClick={this.handleLeaveClub}>
              Leave Club
          </button>
          }
          {(isOwner || isAdmin) &&
            <button
              className="edit-button"
              onClick={this.handleEditClub}>
              Edit Club
            </button>
          }
          {isOwner &&
            <button
              className="delete-button"
              onClick={this.handleDestroyClub}>
              Delete
          </button>
          }
        </section>
        <main className="single-club-main">
          <section className="events-section">
            <h2>Events</h2>
            <ClubEvents
              events={events}
              clubId={club.id}
              isAdmin={isAdmin}
              destroyEvent={destroyEvent}
              clubId={clubId}
            />
          </section>
          <section className="members-section">
            <div className="club-admins">
              <ClubAdmins
                owner={owner}
                admins={admins}
                destroyAdmin={destroyAdmin}
                userStatus={userStatus}
              />
            </div>
            <div className="club-members">
              <ClubMembers
                members={members}
                createAdmin={createAdmin}
                destroyMember={destroyMember}
                userStatus={userStatus}
              />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default ClubShow;
