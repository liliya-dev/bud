import { AnyAction } from 'redux';

const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';
const REMOVE_SELECTED_ITEM = 'REMOVE_SELECTED_ITEM';
const SELECT_ALL= 'SELECT_ALL';
const CANCEL_ALL= 'CANCEL_ALL';

export const cancelAll = () => ({ type: CANCEL_ALL });
export const selectAll = (list: number[]) => ({ type: SELECT_ALL, payload: list });
export const setSelectedItem = (value: number) => ({ type: SET_SELECTED_ITEM, payload: value });
export const removeSelectedItem = (value: number) => ({ type: REMOVE_SELECTED_ITEM, payload: value });

const reducer = (list = [], action: AnyAction) => {
  switch (action.type) {
    case SET_SELECTED_ITEM:
      return [...list, action.payload];
    case REMOVE_SELECTED_ITEM:
      return list.filter(item => item !== action.payload);
    case SELECT_ALL:
      return [...action.payload];
    case CANCEL_ALL:
      return [];
    default:
      return list;
  }
};

export default reducer;