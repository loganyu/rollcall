import React from 'react';
import { withRouter } from 'react-router';

class ClubForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      city: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToIndex = this.navigateToIndex.bind(this);
  }

  navigateToIndex() {
    this.props.history.push('/');
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('club[name]', this.state.name);
    formData.append('club[description]', this.state.description);
    formData.append('club[city]', this.state.city);

    this.props.createClub(formData);
    this.navigateToIndex();
  }

  render() {
    const { name, description, city } = this.state;

    return (
      <div className="new-club-container">
        <div className="new-club-form">
          <h3 className="new-club-title">Create A Club!</h3>

          <form onSubmit={this.handleSubmit}>
            <label className="club-field">Name</label>
            <input
              type="text"
              value={name}
              onChange={this.update('name')}
              className="club-field"
            />

            <label className="club-field">Description</label>
            <input
              type="text"
              value={description}
              onChange={this.update('description')}
              className="club-field"
            />

            <label className="club-field">City</label>
            <input
              type="text"
              value={city}
              onChange={this.update('city')}
              className="club-field"
            />

            <hr />

            <div className="button-holder">
              <input
                type="submit"
                value="Create Club"
                className="new-club-button"
              />
            </div>
          </form>

          <div className="button-holder">
            <button
              className="new-club-button"
              onClick={this.navigateToIndex}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ClubForm);
