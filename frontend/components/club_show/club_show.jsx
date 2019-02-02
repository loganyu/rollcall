import React from 'react';
import { Link } from 'react-router-dom';

import ClubDetail from './club_detail';
import ClubMembers from './club_members';
import ClubAdmins from './club_admins';

class ClubShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDestroyClub = this.handleDestroyClub.bind(this);
    this.handleJoinClub = this.handleJoinClub.bind(this);
    this.handleLeaveClub = this.handleLeaveClub.bind(this);
    this.handleEditClub = this.handleEditClub.bind(this);
  }

  handleDestroyClub() {
    this.props.destroyClub().then(() => {
      this.props.history.push('/');
    });
  }

  handleJoinClub() {
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

  componentDidMount() {
    this.props.fetchClub(this.props.clubId);
  }

  render() {
    const { club, members, admins, owner, currentUser, 
      destroyMember, createAdmin, destroyAdmin }  = this.props;
    
    return (
      <div className="single-club-show">
        <Link to="/">Back to Clubs Index</Link>
        <div className="club-details">
          <ClubDetail club={club} />
        </div>
        <div className="club-admins">
          <ClubAdmins
            owner={owner}
            admins={admins}
            destroyAdmin={destroyAdmin}
          />
        </div>
        <div className="club-members">
          <ClubMembers 
            members={members} 
            createAdmin={createAdmin}
            destroyMember={destroyMember}
          />
        </div>
        {currentUser &&
          <button
            className="join-button"
            onClick={this.handleJoinClub}>
            Join Club
          </button>
        }
        {currentUser && club.memberIds.includes(currentUser.id) &&
          <button
            className="leave-button"
            onClick={this.handleLeaveClub}>
            Leave Club
          </button>
        }
        {currentUser && currentUser.id === club.owner_id &&
          <div>
            <button
              className="edit-button"
              onClick={this.handleEditClub}>
              Edit Club
            </button>
            <button
              className="delete-button"
              onClick={this.handleDestroyClub}>
              Delete
            </button>
          </div>
        }
        
      </div>
    );
  }
}

export default ClubShow;
