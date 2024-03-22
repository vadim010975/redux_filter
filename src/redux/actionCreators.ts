import { ADD_POSITION, REMOVE_POSITION, SET_FORM_VALUES, SHOW_BTN_CANCEL, HIDE_BTN_CANCEL, FILTER_LIST } from './actions'
import { Position } from '../service'

export const addPosition = (position: Position) => {
  return {
    type: ADD_POSITION,
    payload: position,
  }
}

export const removePosition = (position: Position) => {
  return {
    type: REMOVE_POSITION,
    payload: position,
  }
}

export const setFormValues = (position: Position) => {
  return {
    type: SET_FORM_VALUES,
    payload: position,
  }
}

export const showBtnCancel = () => {
  return {
    type: SHOW_BTN_CANCEL,
  }
}

export const hideBtnCancel = () => {
  return {
    type: HIDE_BTN_CANCEL,
  }
}

export const filterList = (str: string) => {
  return {
    type: FILTER_LIST,
    payload: str,
  }
}
