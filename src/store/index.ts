import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authorizationReducer from './autorizes';
import registeredUserReducer from './registeredUser';
import selectedListReducer from './selectedList';


const rootReducer = combineReducers({
  authorization: authorizationReducer,
  registeredUser: registeredUserReducer,
  selectedList: selectedListReducer,
});

export const getAuthorization = (state: RootState) => state.authorization;
export const getRegisteredUser = (state: RootState) => state.registeredUser;
export const getSelectedList = (state: RootState) => state.selectedList;

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;