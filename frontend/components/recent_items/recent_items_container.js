import { connect } from 'react-redux';
import { fetchAllItems } from './../../actions/item_actions';
import { fetchAllFavorites } from './../../actions/favorite_actions';

import RecentItems from './recent_items';

const mapStateToProps = ({ session, entities: { users, items, favorites } }) => {
  return {
    currentUser: users[session.id],
    items: Object.values(items),
    favorites: Object.values(favorites)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllItems: () => dispatch(fetchAllItems()),
  fetchAllFavorites: () => dispatch(fetchAllFavorites())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentItems);