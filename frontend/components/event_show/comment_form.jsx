import React from 'react';
import { withRouter } from 'react-router';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('event_comment[body]', this.state.body);
    this.props.submit(formData).then(() => {
      this.setState({ body: '' });
    });
  }
  
  render() {
    const {
      body,
    } = this.state;

    return (
      <div className="new-event-container">
        <div className="new-event-form">
          <h3 className="new-event-title">Comment</h3>

          <form onSubmit={this.handleSubmit}>
            <label className="event-field">Body</label>
            <input
              type="text"
              value={body}
              onChange={this.update('body')}
              className="event-field"
            />
            <br />

            <div className="button-holder">
              <input
                type="submit"
                value="Submit"
                className="new-event-button"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;
