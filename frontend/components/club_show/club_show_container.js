import { connect } from 'react-redux';

import { fetchClub, destroyClub } from '../../actions/club_actions';
import { createMember, destroyMember } from '../../actions/member_actions';
import { createAdmin, destroyAdmin } from '../../actions/admin_actions';
import { selectClub, selectMembersForClub, selectAdminsForClub } from '../../reducers/selectors';
import ClubShow from './club_show';

const mapStateToProps = ({ session, entities }, { match }) => {
  const { users } = entities;
  const clubId = parseInt(match.params.clubId);
  const club = selectClub(entities, clubId);
  const members = selectMembersForClub(entities, club);
  const admins = selectAdminsForClub(entities, club);
  const currentUser = users[session.id];

  return {
    clubId,
    club,
    members,
    admins,
    currentUser,
  };
};

const mapDispatchToProps = (dispatch, { match } ) => {
  const { clubId } = match.params;

  return {
    fetchClub: id => dispatch(fetchClub(id)),
    destroyClub: () => dispatch(destroyClub(clubId)),
    createMember: (memberForm) => dispatch(createMember(clubId, memberForm)),
    destroyMember: (memberId) => dispatch(destroyMember(clubId, memberId)),
    createAdmin: (adminForm) => dispatch(createAdmin(clubId, adminForm)),
    destroyAdmin: (adminId) => dispatch(destroyAdmin(clubId, adminId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClubShow);
