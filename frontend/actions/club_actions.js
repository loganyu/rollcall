import * as APIUtil from '../util/club_api_util';

export const RECEIVE_CLUBS = 'RECEIVE_CLUBS';
export const RECEIVE_CLUB = 'RECEIVE_CLUB';

export const receiveClubs = clubs => ({
  type: RECEIVE_CLUBS,
  clubs,
});

export const receiveClub = ({ club, members }) => ({
  type: RECEIVE_CLUB,
  club,
  members,
});

export const fetchClubs = () => dispatch => (
  APIUtil.fetchClubs().then(clubs => (
    dispatch(receiveClubs(clubs))
  ))
);

export const fetchClub = id => dispatch => (
  APIUtil.fetchClub(id).then(payload => (
    dispatch(receiveClub(payload))
  ))
);

export const createClub = club => dispatch => (
  APIUtil.createClub(club).then(club => (
    dispatch(receiveClub(club))
  ))
);
