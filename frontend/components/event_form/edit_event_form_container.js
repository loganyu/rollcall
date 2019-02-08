import { connect } from 'react-redux';

import { updateEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = (state, { match }) => ({
  clubId: parseInt(match.params.clubId),
  eventId: parseInt(match.params.eventId)
});

const mapDispatchToProps = (dispatch, { match }) => ({
  submit: event => dispatch(updateEvent(match.params.clubId, match.params.eventId, event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
