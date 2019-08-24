import * as APIUtil from "../util/item_api_util";

export const RECEIVE_CURRENT_ITEM = "RECEIVE_CURRENT_ITEM";
export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS";
export const REMOVE_CURRENT_ITEM = "REMOVE_CURRENT_ITEM";
export const RECEIVE_ITEM_ERRORS = 'RECEIVE_ITEM_ERRORS';

export const receiveAllItems = items => {
  return {
    type: RECEIVE_ALL_ITEMS,
    items: items
  };
};

export const receiveCurrentItem = item => {
  return {
    type: RECEIVE_CURRENT_ITEM,
    item: item
  };
};

export const removeCurrentItem = item => {
  return {
    type: REMOVE_CURRENT_ITEM,
    item: item
  };
};

export const receiveErrors = errors => ({
  type: RECEIVE_ITEM_ERRORS,
  errors
});

// thunk action creators

export const addItem = item => dispatch => {
  debugger;
  return APIUtil.createItem(item).then(item => (
    dispatch(receiveCurrentItem(item))
    ), err => (
    dispatch(receiveErrors(err.responseJSON))
  )); 
};

export const deleteItem = (userId, itemId) => dispatch => {
  return APIUtil.deleteItem(userId, itemId).then(res =>
      dispatch(removeCurrentItem(res))
  );
};