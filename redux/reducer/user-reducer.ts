import { fromJS } from 'immutable';

import { createTypeReducer } from '../redux-type-saga';
import { IImutableUserState } from '../redux-state';
import {
  getStudentClassAction,
  updateStudentClassAction,
} from '../action/user-action';

export function createInitUserState(): IImutableUserState {
  return fromJS({});
}

export const getStudentClassReducer = getStudentClassAction.done.reducer<IImutableUserState>(
  (state, action) => {
    return state.set('class', fromJS(action.payload));
  },
);

export const updateStudentClassReducer = updateStudentClassAction.reducer<IImutableUserState>(
  (state, action) => {
    return state.update('class', (item) => item.concat(fromJS(action.payload)));
  },
);

const userReducer = createTypeReducer<IImutableUserState>(
  createInitUserState(),
  getStudentClassReducer,
  updateStudentClassReducer,
);

export default userReducer;
