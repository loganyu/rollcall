import React from 'react';
import { Link } from 'react-router-dom';

import ClubDetail from './club_detail';
import { ProtectedRoute } from '../../util/route_util';

class ClubShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmitDestroy = this.handleSubmitDestroy.bind(this);
    this.navigateToIndex = this.navigateToIndex.bind(this);
  }

  handleSubmitDestroy() {
    this.props.destroyClub();
    this.navigateToIndex();
  }

  navigateToIndex() {
    this.props.history.push('/');
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
        <button
          className="delete-button"
          onClick={this.handleSubmitDestroy}>
          Delete
        </button>
      </div>
    );
  }
}

export default ClubShow;
