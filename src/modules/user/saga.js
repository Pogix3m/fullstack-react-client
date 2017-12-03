import { call, put, takeEvery } from 'redux-saga/effects';
import { browserHistory } from 'react-router';

import { signup, login, logout } from './api';
import {
  loginSucceeded,
  LOGIN_REQUESTED,
  SIGNUP_REQUESTED,
  logoutDone,
  LOGOUT_REQUESTED,
  signupSucceeded
} from './action'

function* tryLogin({ payload }) {
  const user = yield call(login, payload);
  yield put(loginSucceeded(user));
  if (user && user.hasOwnProperty('accessToken')) {
    yield browserHistory.push(payload.next);
  }
}

export function* loginSaga() {
  yield takeEvery(LOGIN_REQUESTED, tryLogin);
}

function* trySignup({ payload }) {
  const success = yield call(signup, payload);
  console.log('success: ', success);
  yield put(signupSucceeded(success));
  yield browserHistory.push('login');
}

export function* signupSaga(feathersApp) {
  yield takeEvery(SIGNUP_REQUESTED, trySignup, feathersApp);
}

function* callLogOut() {
  yield call(logout);
  yield put(logoutDone({}));
  // yield browserHistory.push('');
}

export function* logoutSaga() {
  yield takeEvery(LOGOUT_REQUESTED, callLogOut);
}
