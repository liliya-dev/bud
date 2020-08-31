import { AnyAction } from 'redux';

const SET_AUTHORIZATION = 'SET_AUTHORIZATION';

export const setAuthorization = (value: boolean) => ({ type: SET_AUTHORIZATION, payload: value });

const reducer = (value = false, action: AnyAction) => {
  switch (action.type) {
    case SET_AUTHORIZATION:
      return action.payload;

    default:
      return value;
  }
};

export default reducer;