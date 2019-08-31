import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchAllItems } from '../../actions/item_actions';
import Header from './header';

const mapStateToProps = ({ session, entities: { users, items } }) => {
  return {
    currentUser: users[session.id],
    items: Object.values(items)
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllItems: () => dispatch(fetchAllItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);