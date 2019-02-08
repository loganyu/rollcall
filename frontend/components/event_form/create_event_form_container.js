import { connect } from 'react-redux';

import { createEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = (state, { match }) => ({
  clubId: parseInt(match.params.clubId),
});

const mapDispatchToProps = (dispatch, { match }) => ({
  submit: event => dispatch(createEvent(match.params.clubId, event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
