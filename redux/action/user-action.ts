import { createTypeAction, createTypeSagaAction } from '../redux-type-saga';

export const getStudentClassAction = createTypeSagaAction('GET_ACTION');
export const updateStudentClassAction = createTypeAction('UPDATE_ACTION');
