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
      <div className="new-comment-form">
        <form onSubmit={this.handleSubmit}>
          <textarea
            rows="5"
            value={body}
            className="comment-form-body"
            onChange={this.update('body')}
            placeholder="Add comment"
          />
          <br />

          <div className="button-holder">
            <button
              type="submit"
              value="Submit"
              className="new-comment-button"
              disabled={body === ''}
              >Add Comment</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;
