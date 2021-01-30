import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Record } from 'immutable';
import createSagaMiddleware from 'redux-saga';

import { IStore } from './redux-state';
import rootSaga from './saga/root-saga';
import {
  createTypeReduxInitialState,
  typePendingReducerSet,
} from './redux-type-saga';
import appReducer, { createInitAppState } from './reducer/app-reducer';
import userReducer, { createInitUserState } from './reducer/user-reducer';
import { logoutAction } from './action/app-action';

export const InitialState = Record<IStore>({
  ...createTypeReduxInitialState(),
  appState: createInitAppState(),
  userState: createInitUserState(),
})();

export const mainAppReducer = combineReducers(
  {
    ...typePendingReducerSet,
    appState: appReducer,
    userState: userReducer,
  },
  InitialState,
);

export const rootReducer = (state, action) =>
  action.type === logoutAction.done.type
    ? InitialState.clear()
    : mainAppReducer(state, action);

const sagaMiddleware = createSagaMiddleware();
declare const window;
let composeEnhancers;
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
export const configureStore = (initialStateMap = InitialState) => {
  const initialState = Record<IStore>({
    ...createTypeReduxInitialState(),
    appState: initialStateMap.appState || createInitAppState(),
    userState: initialStateMap.userState || createInitUserState(),
  })();
  return createStore(
    rootReducer,
    initialState,
    __DEV__
      ? composeEnhancers(applyMiddleware(sagaMiddleware))
      : applyMiddleware(sagaMiddleware),
  );
};

export const store = configureStore();
sagaMiddleware.run(rootSaga);
