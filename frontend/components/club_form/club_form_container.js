import { connect } from 'react-redux';

import { createClub } from '../../actions/club_actions';
import ClubForm from './club_form';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  createClub: club => dispatch(createClub(club))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClubForm);
