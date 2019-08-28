import { connect } from "react-redux";
import UserFavoriteItemsIndex from "./user_favorite_items_index";
import { fetchAllListedItems, fetchAllFavoriteItems } from '../../actions/item_actions';

const mapStateToProps = (
  { session, entities: { users, listedItems, favoriteItems, favorites } }
) => {
  return {
    currentUser: users[session.id],
    listedItems: Object.values(listedItems),
    favoriteItems: Object.values(favoriteItems),
    favorites: Object.values(favorites)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllListedItems: () => dispatch(fetchAllListedItems()),
  fetchAllFavoriteItems: () => dispatch(fetchAllFavoriteItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFavoriteItemsIndex);