import { connect } from 'react-redux';

import { fetchClub } from '../../actions/club_actions';
import { selectClub } from '../../reducers/selectors';
import ClubShow from './club_show';

const mapStateToProps = (state, { match }) => {
  const clubId = parseInt(match.params.clubId);
  const club = selectClub(state.entities, clubId);
  return {
    clubId,
    club,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchClub: id => dispatch(fetchClub(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClubShow);
