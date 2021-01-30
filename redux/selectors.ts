import { IImmutableStore } from './redux-state';

//App
export const sGetAppStatus = (store: IImmutableStore) =>
  store.appState.get('status');
export const sGetIndicatorState = (store: IImmutableStore) =>
  store.appState.get('loading');
export const sGetInAccessToken = (store: IImmutableStore) =>
  store.appState.getIn(['token', 'access']);
