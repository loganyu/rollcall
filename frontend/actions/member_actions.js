import * as APIUtil from '../util/member_api_util';

export const RECEIVE_MEMBER = 'RECEIVE_MEMBER';
export const REMOVE_MEMBER = 'REMOVE_MEMBER';

export const receiveMember = ({club, member}) => ({
  type: RECEIVE_MEMBER,
  club,
  member,
});

export const removeMember = ({club, member}) => ({
  type: REMOVE_MEMBER,
  club,
  member,
});

export const createMember = (clubId, memberForm) => dispatch => (
  APIUtil.createMember(clubId, memberForm).then((memberData) => (
    dispatch(receiveMember(memberData))
  ))
);

export const destroyMember = (clubId, memberId) => dispatch => (
  APIUtil.destroyMember(clubId, memberId).then((memberData) => (
    dispatch(removeMember(memberData))
  ))
);
