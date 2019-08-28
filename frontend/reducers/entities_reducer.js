import { combineReducers } from 'redux';

import users from './users_reducer';
import items from './items_reducer';
import listedItems from './listed_items_reducer';
import favoriteItems from './favorite_items_reducer';
import categories from './categories_reducer';
import selectedCategory from './selected_category_reducer';
import favorites from './favorites_reducer';

export default combineReducers({
  users,
  items,
  listedItems,
  favoriteItems,
  categories,
  selectedCategory,
  favorites
});

