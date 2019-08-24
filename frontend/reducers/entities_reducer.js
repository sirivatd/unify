import { combineReducers } from 'redux';

import users from './users_reducer';
import items from './items_reducer';
import listedItems from './listed_items_reducer';

export default combineReducers({
  users,
  items,
  listedItems
});

