import * as APIUtil from "../util/favorite_api_util";

export const RECEIVE_CURRENT_FAVORITE = "RECEIVE_CURRENT_FAVORITE";
export const RECEIVE_ALL_FAVORITES = "RECEIVE_ALL_FAVORITES";
export const REMOVE_CURRENT_FAVORITE = "REMOVE_CURRENT_FAVORITE";

export const receiveAllFavorites = favorites => {
  return {
    type: RECEIVE_ALL_FAVORITES,
    favorites: favorites
  };
};

export const receiveCurrentFavorite = favorite => {
  return {
    type: RECEIVE_CURRENT_FAVORITE,
    favorite: favorite
  };
};

export const removeCurrentFavorite = favorite => {
  return {
    type: REMOVE_CURRENT_FAVORITE,
    favorite: favorite
  };
};

// thunk action creators

export const addFavorite = itemId => dispatch => {
  return APIUtil.createFavorite(itemId).then(favorite => (
    dispatch(receiveCurrentFavorite(favorite))
  ));
};

export const deleteFavorite = itemId => dispatch => {
  return APIUtil.deleteFavorite(itemId).then(res =>
    dispatch(removeCurrentFavorite(res))
  );
};

export const fetchAllFavorites = () => dispatch => {
  return APIUtil.fetchAllFavorites().then(res =>
      dispatch(receiveAllFavorites(res))
  );
};