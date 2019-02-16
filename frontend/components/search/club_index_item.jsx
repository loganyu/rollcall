import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const clubId = this.props.club.id;
    this.props.history.push(`/clubs/${clubId}`);
  }

  render() {
    const { name, city, description, adminIds, memberIds } = this.props.club;
    const numberOfRunners = adminIds.length + memberIds.length + 1; // owner
    return (
      <div
        className="club-item"
        onClick={this.handleClick}
      >
        <div className="club-item-info">
          <span className="club-title">
            {name}
          </span>
          <span className="club-city">
            {city}
          </span>
          <span className="club-runners">
            {numberOfRunners} runners
          </span>
          <span className="club-description">{description}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexItem);
