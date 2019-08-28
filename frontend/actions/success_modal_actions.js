export const TOGGLE_SUCCESS_MODAL_ON = "TOGGLE_SUCCESS_MODAL_ON";
export const TOGGLE_SUCCESS_MODAL_OFF = "TOGGLE_SUCCESS_MODAL_OFF";

export const toggleSuccessModalOn = () => {
  return {
    type: TOGGLE_SUCCESS_MODAL_ON
  };
};

export const toggleSuccessModalOff = () => {
  return {
    type: TOGGLE_SUCCESS_MODAL_OFF
  };
};

export const toggleModalOn = () => dispatch => {
  return dispatch(toggleSuccessModalOn());
};

export const toggleModalOff = () => dispatch => {
  return dispatch(toggleSuccessModalOff());
};