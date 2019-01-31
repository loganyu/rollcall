import { connect } from 'react-redux';

import ClubIndex from './club_index.jsx';
import { fetchClubs } from '../../actions/club_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  clubs: asArray(state.entities)
});

const mapDispatchToProps = dispatch => ({
  fetchClubs: () => dispatch(fetchClubs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClubIndex);