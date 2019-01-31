import React from 'react';
import { Link } from 'react-router-dom';

import ClubDetail from './club_detail';
import { ProtectedRoute } from '../../util/route_util';

const ClubShow = ({ club, clubId }) => {

  return (
    <div className="single-club-show">
      <Link to="/">Back to Clubs Index</Link>
      <div className="club-details">
        <ClubDetail club={club} />
      </div>
    </div>
  );
};

export default ClubShow;
