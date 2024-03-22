import { SHOW_BTN_CANCEL, HIDE_BTN_CANCEL } from '../actions';

const initialState = { visibilityBtnCancel: false };

type Action = {
  type: string;
};

const btnCancelReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SHOW_BTN_CANCEL:
      return {
        ...state,
        visibilityBtnCancel: true,
      };
    case HIDE_BTN_CANCEL:
      return {
        ...state,
        visibilityBtnCancel: false,
      };
    default:
      return state;
  }
};

export default btnCancelReducer;
