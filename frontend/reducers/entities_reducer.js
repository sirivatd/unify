import { combineReducers } from 'redux';

import users from './users_reducer';
import items from './items_reducer';
import listedItems from './listed_items_reducer';
import categories from './categories_reducer';

export default combineReducers({
  users,
  items,
  listedItems,
  categories
});

