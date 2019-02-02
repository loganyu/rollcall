import React from 'react';
import { Link } from 'react-router-dom';

import ClubDetail from './club_detail';
import ClubMembers from './club_members';

class ClubShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDestroyClub = this.handleDestroyClub.bind(this);
  }

  handleDestroyClub() {
    this.props.destroyClub().then(() => {
      this.props.history.push('/');
    });
  }

  componentDidMount() {
    this.props.fetchClub(this.props.clubId);
  }

  render() {
    const { club, clubId, members, currentUser, createMember, destroyMember }  = this.props;
    
    return (
      <div className="single-club-show">
        <Link to="/">Back to Clubs Index</Link>
        <div className="club-details">
          <ClubDetail club={club} />
        </div>
        <div className="club-members">
          <ClubMembers 
            members={members} 
            createMember={createMember} 
            destroyMember={destroyMember}
          />
        </div>
        {currentUser && currentUser.id === club.creator_id &&
        <div>
          <Link to={`/clubs/edit/${clubId}`}>Edit Club</Link>
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
