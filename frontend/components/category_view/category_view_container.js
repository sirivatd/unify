import { connect } from 'react-redux';
import { fetchAllCategoryItems  } from './../../actions/item_actions';
import { fetchAllFavorites } from './../../actions/favorite_actions';
import { removeSelectedCategory } from './../../actions/category_actions';

import CategoryView from './category_view';

const mapStateToProps = ({ session, entities: { users, favorites, selectedCategory, categoryItems } }) => {
  return {
    currentUser: users[session.id],
    favorites: Object.values(favorites),
    selectedCategory: selectedCategory,
    categoryItems: Object.values(categoryItems)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllFavorites: () => dispatch(fetchAllFavorites()),
  removeSelectedCategory: () => dispatch(removeSelectedCategory()),
  fetchAllCategoryItems: category => dispatch(fetchAllCategoryItems(category))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryView);