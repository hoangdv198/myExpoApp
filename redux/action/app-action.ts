import {
  createTypeSagaAction,
  createTypeAction,
  LOADING_TYPE,
} from '../redux-type-saga';

export const initApplicationAction = createTypeSagaAction('INIT_APPLICATION');
export const setLoadingIndicatorAction = createTypeAction(LOADING_TYPE);
export const setRegisterAction = createTypeSagaAction('SET_REGISTER_ACTION');
export const loginAction = createTypeSagaAction('LOGIN_ACTION');
export const logoutAction = createTypeSagaAction('LOGOUT_ACTION');
