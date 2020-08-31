import { AnyAction } from 'redux';

const SET_REGISTERED_USER = 'SET_REGISTERED_USER';

export const setRegisteredUser = (value: string) => ({ type: SET_REGISTERED_USER, payload: value });

const reducer = (value = '', action: AnyAction) => {
  switch (action.type) {
    case SET_REGISTERED_USER:
      return action.payload;

    default:
      return value;
  }
};

export default reducer;