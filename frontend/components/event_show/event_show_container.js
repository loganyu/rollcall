import { connect } from 'react-redux';

import { fetchEvent, destroyEvent } from '../../actions/event_actions';
import { createEventFollow, destroyEventFollow } from '../../actions/event_follow_actions';
import { createEventComment, fetchEventComments,
  updateEventComment, destroyEventComment } from '../../actions/event_comment_actions';
import {
  selectEvent,
  selectClub,
  selectOwnerForEvent,
  selectCommentsForEvent,
} from '../../reducers/selectors';
import EventShow from './event_show';

const mapStateToProps = ({ session, entities }, { match }) => {
  const { users } = entities;
  const eventId = parseInt(match.params.eventId);
  const event = selectEvent(entities, eventId);
  const clubId = parseInt(match.params.clubId);
  const club = selectClub(entities, clubId);
  const currentUser = users[session.id];
  const owner = selectOwnerForEvent(entities, event);
  const comments = selectCommentsForEvent(entities, event);

  return {
    eventId,
    event,
    clubId,
    club,
    currentUser,
    owner,
    comments,
  };
};

const mapDispatchToProps = (dispatch, { match }) => {
  const { clubId, eventId } = match.params;

  return {
    fetchEvent: id => dispatch(fetchEvent(clubId, eventId)),
    destroyEvent: () => dispatch(destroyEvent(clubId, eventId)),
    createEventFollow: () => dispatch(createEventFollow(eventId)),
    destroyEventFollow: () => dispatch(destroyEventFollow(eventId)),
    createEventComment: (commentForm) => dispatch(createEventComment(eventId, commentForm)),
    fetchEventComments: (commentId, commentForm) => dispatch(fetchEventComments(eventId, commentId, commentForm)),
    updateEventComment: (commentId) => dispatch(updateEventComment(eventId, commentId)),
    destroyEventComment: (commentId) => dispatch(destroyEventComment(eventId, commentId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
