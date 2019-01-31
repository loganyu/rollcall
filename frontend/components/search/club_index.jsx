import React from 'react';

import ClubIndexItem from './club_index_item';

class ClubIndex extends React.Component {
  componentDidMount() {
    this.props.fetchClubs()
  }

  render() {
    const { clubs } = this.props;
    console.log(this.props);
    return (
      <div>
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