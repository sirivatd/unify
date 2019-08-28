import { connect } from 'react-redux';
import { fetchAllItems } from './../../actions/item_actions';
import { fetchAllFavorites } from './../../actions/favorite_actions';
import { removeSelectedCategory } from './../../actions/category_actions';

import CategoryView from './category_view';

const mapStateToProps = ({ session, entities: { users, items, favorites, selectedCategory} }) => {
  return {
    currentUser: users[session.id],
    items: Object.values(items),
    favorites: Object.values(favorites),
    selectedCategory: selectedCategory
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllItems: () => dispatch(fetchAllItems()),
  fetchAllFavorites: () => dispatch(fetchAllFavorites()),
  removeSelectedCategory: () => dispatch(removeSelectedCategory())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryView);