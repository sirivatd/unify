import { connect } from 'react-redux';
import { fetchAllItems } from './../../actions/item_actions';

import RecentItems from './recent_items';

const mapStateToProps = ({ session, entities: { users, items } }) => {
  return {
    currentUser: users[session.id],
    items: Object.values(items)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllItems: () => dispatch(fetchAllItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentItems);