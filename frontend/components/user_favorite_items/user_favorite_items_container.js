import { connect } from "react-redux";
import UserFavoriteItemsIndex from "./user_favorite_items_index";

const mapStateToProps = (
  { session, entities: { users } }
) => {
  return {
    currentUser: users[session.id]
  };
};

export default connect(
  mapStateToProps,
  null
)(UserFavoriteItemsIndex);