import React from 'react';
import { Link } from 'react-router-dom';

import ClubDetail from './club_detail';
import { ProtectedRoute } from '../../util/route_util';

class ClubShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchClub(this.props.clubId);
  }

  render() {
    const { club, clubId, members }  = this.props;

    return (
      <div className="single-club-show">
        <Link to="/">Back to Clubs Index</Link>
        <div className="club-details">
          <ClubDetail club={club} members={members} />
        </div>
      </div>
    );
  }
}

export default ClubShow;
