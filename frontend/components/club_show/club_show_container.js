import { connect } from 'react-redux';

import { fetchClub, destroyClub } from '../../actions/club_actions';
import { selectClub, selectMembersForClub } from '../../reducers/selectors';
import ClubShow from './club_show';

const mapStateToProps = ({ session, entities }, { match }) => {
  const { users } = entities;
  const clubId = parseInt(match.params.clubId);
  const club = selectClub(entities, clubId);
  const members = selectMembersForClub(entities, club);
  const currentUser = users[session.id];

  return {
    clubId,
    club,
    members,
    currentUser,
  };
};

const mapDispatchToProps = (dispatch, { match } ) => ({
    fetchClub: id => dispatch(fetchClub(id)),
    destroyClub: () => dispatch(destroyClub(match.params.clubId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClubShow);
