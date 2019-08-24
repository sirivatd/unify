import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchAllListedItems } from '../../actions/item_actions';
import Home from './home';

const mapStateToProps = ({ session, entities: { users, listedItems } }) => {
  return {
    currentUser: users[session.id],
    listedItems: Object.values(listedItems)
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);