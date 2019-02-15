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
        <Link to="/clubs/new">Start a new club</Link>
        <h2>Clubs </h2>
        <section className="clubs-container">
          {clubs.map((club) => (
            <ClubIndexItem
              club={club}
              key={club.id}
            />
          ))}
        </section>
      </div>
    )
  }
}

export default ClubIndex;