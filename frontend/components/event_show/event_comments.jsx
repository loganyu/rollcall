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
    const { users, comments, createEventComment, isMember, isAdmin, currentUser } = this.props;
    console.log('users', users);

    return (
      <div>
        <h2>Discussion</h2>
        {(isMember || isAdmin) &&
          <CommentForm
            submit={(commentForm) => createEventComment(commentForm)}
          />
        }
        <div className='comments-container'>
          {comments.map(comment => (
            <div key={comment.id} className='comment-item'>
              <div className='comment-content'>
                <div ><b>{users[comment.user_id].name}</b></div>
                <small>{comment.time_ago}</small>
                <div className='comment-body'>{comment.body}</div>
              </div>
              <div className='comment-options'>
                {currentUser && comment.user_id == currentUser.id &&
                  <button
                    className="gray-button"
                    onClick={() => this.handleRemoveComment(comment.id)}>
                    Delete
                  </button>
                }
              </div>
            </div>
          ))}
        </div>
      </div>      
    );
  }
};

export default EventComments;
