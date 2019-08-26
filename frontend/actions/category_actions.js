import * as APIUtil from "../util/category_api_util";

export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES";

export const receiveAllCategories = categories => {
  return {
    type: RECEIVE_ALL_CATEGORIES,
    categories: categories
  };
};

// thunk action creators

export const fetchAllCategories = () => dispatch => {
  return APIUtil.fetchCategories().then(res =>
      dispatch(receiveAllCategories(res))
    );
};