import merge from "lodash/merge";

import {
  RECEIVE_ALL_FAVORITE_ITEMS
} from './../actions/item_actions';

const favoriteItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_FAVORITE_ITEMS:
      return merge({}, state, action.items);
    default:
      return state;
  }
};

export default favoriteItemsReducer;