import React from 'react';

import CommentForm from './comment_form';

class EventComments extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveComment = this.handleRemoveComment.bind(this);
  }

  handleRemoveComment(commentId) {
    this.props.destroyEventComment(commentId);
  }

  render() {
    const { comments, createEventComment, isMember, isAdmin, currentUser } = this.props;

    return (
      <div>
        {(isMember || isAdmin) &&
          <CommentForm
            submit={(commentForm) => createEventComment(commentForm)}
          />
        }
        {Object.keys(comments).map(id => (
          <div key={id}>
            <div>{comments[id].body}</div>
            <div>{comments[id].user_id}</div>
            {currentUser && comments[id].user_id == currentUser.id &&
              <button
                className="delete-button"
                onClick={() => this.handleRemoveComment(id)}>
                Delete
              </button>
            }
          </div>
        ))
        }
      </div>
      
    );
  }
};

export default EventComments;
