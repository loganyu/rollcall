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
    const { name, city, description } = this.props.club;
    return (
      <div
        className="club-index-item"
        onClick={this.handleClick}
      >
        <div className="index-item-info">
          <span className="index-item-category">Name:</span>
          <span className="index-item-copy">
            {name}
          </span>
          <span className="index-item-category">Location:</span>
          <span className="index-item-copy">
            {city}
          </span>
          <span className="index-item-category">Description:</span>
          <span className="index-item-copy">{description}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexItem);
