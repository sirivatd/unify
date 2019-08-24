import { connect } from "react-redux";
import UserFavoriteItemsIndex from "./user_favorite_items_index";
import { fetchAllListedItems } from '../../actions/item_actions';

const mapStateToProps = (
  { session, entities: { users, listedItems } }
) => {
  return {
    currentUser: users[session.id],
    listedItems: Object.values(listedItems)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllListedItems: () => dispatch(fetchAllListedItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFavoriteItemsIndex);