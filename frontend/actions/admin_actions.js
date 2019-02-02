import * as APIUtil from '../util/admin_api_util';

export const RECEIVE_ADMIN = 'RECEIVE_ADMIN';
export const REMOVE_ADMIN = 'REMOVE_ADMIN';

export const receiveAdmin = ({ club, admin }) => ({
  type: RECEIVE_ADMIN,
  club,
  admin,
});

export const removeAdmin = ({ club, admin }) => ({
  type: REMOVE_ADMIN,
  club,
  admin,
});

export const createAdmin = (clubId, adminForm) => dispatch => (
  APIUtil.createAdmin(clubId, adminForm).then((adminData) => (
    dispatch(receiveAdmin(adminData))
  ))
);

export const destroyAdmin = (clubId, adminId) => dispatch => (
  APIUtil.destroyAdmin(clubId, adminId).then((adminData) => (
    dispatch(removeAdmin(adminData))
  ))
);
