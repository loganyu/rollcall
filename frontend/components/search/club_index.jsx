import React from 'react';

import ClubIndexItem from './club_index_item';
import {
  Link,
} from 'react-router-dom';

class ClubIndex extends React.Component {
  componentDidMount() {
    this.props.fetchClubs();
  }

  render() {
    const { clubs } = this.props;
    return (
      <div>
        <Link to="/clubs/new">Create a Club</Link>
        <h1>Clubs: </h1>
        {clubs.map((club) => (
          <ClubIndexItem
            club={club}
            key={club.id}
          />
        ))}
      </div>
    )
  }
}

export default ClubIndex;