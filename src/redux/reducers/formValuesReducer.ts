import { SET_FORM_VALUES } from '../actions';
import { Position } from '../../service';

const initialState = { formValues: {work: '', price: ''} };

type Action = {
  type: string,
  payload: Position,
};

const formValueReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_FORM_VALUES:
      return {
        ...state,
        formValues: action.payload,
      }
    default:
      return state;
  }
}

export default formValueReducer;