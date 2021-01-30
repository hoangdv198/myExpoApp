import { createTypeReducer } from '../redux-type-saga';
import { AppStatus, IImmutableAppState } from '../redux-state';
import { fromJS } from 'immutable';
import {
  initApplicationAction,
  setLoadingIndicatorAction,
} from '../action/app-action';

export function createInitAppState(): IImmutableAppState {
  return fromJS({
    status: AppStatus.Unload,
    loading: false,
    token: {
      access: null,
      refresh: null,
    },
  });
}

export const initApplicationReducer = initApplicationAction.done.reducer<IImmutableAppState>(
  (state, action) => {
    return state.set('status', action.payload);
  },
);
export const setIndicatorReducer = setLoadingIndicatorAction.reducer<IImmutableAppState>(
  (state, action) => {
    return state.set('loading', !!action.payload);
  },
);

const appReducer = createTypeReducer<IImmutableAppState>(
  createInitAppState(),
  initApplicationReducer,
  setIndicatorReducer,
);

export default appReducer;
