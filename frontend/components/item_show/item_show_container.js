import { connect } from 'react-redux';

import { addFavorite, deleteFavorite, fetchAllFavorites } from '../../actions/favorite_actions';
import { fetchAllFavoriteItems } from '../../actions/item_actions';
import { fetchAllItems } from './../../actions/item_actions';
import ItemShow from './item_show';

const mapStateToProps = ({ session, entities: { items, users, favoriteItems, favorites }}, ownProps) => {
  const itemId = parseInt(ownProps.match.params.itemId);
  return {
    item: items[itemId],
    favoriteItems: Object.values(favoriteItems),
    currentUser: users[session.id],
    items: Object.values(items),
    favorites: Object.values(favorites)
  };
};

const mapDispatchToProps = dispatch => ({
  addFavorite: itemId => dispatch(addFavorite(itemId)),
  deleteFavorite: itemId => dispatch(deleteFavorite(itemId)),
  fetchAllFavoriteItems: () => dispatch(fetchAllFavoriteItems()),
  fetchAllItems: () => dispatch(fetchAllItems()),
  fetchAllFavorites: () => dispatch(fetchAllFavorites())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemShow);

