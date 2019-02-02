import { connect } from 'react-redux';

import { updateClub } from '../../actions/club_actions';
import ClubForm from './club_form';
import { selectClub } from '../../reducers/selectors';

const mapStateToProps = ({ entities }, { match }) => {
  const clubId = parseInt(match.params.clubId);
  const club = selectClub(entities, clubId);

  return {
    club
  };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  submit: club => dispatch(updateClub(match.params.clubId, club))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClubForm);
