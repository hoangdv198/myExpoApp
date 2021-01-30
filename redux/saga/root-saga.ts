import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
  try {
    console.log('start root-saga');
    // fork app-saga, auth-saga, etc..
  } catch (error) {
    // Handle error
  }
}
