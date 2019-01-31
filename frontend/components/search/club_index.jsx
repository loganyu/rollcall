import React from 'react';

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
        {clubs && 
          <ul>
            {clubs.map((club, i) => (
              <li key={i}>
                {club.name}: {club.description}
              </li>
            ))}
          </ul>
        }
      </div>
    )
  }
}

export default ClubIndex;