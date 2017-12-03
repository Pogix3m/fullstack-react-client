import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import { routerReducer } from 'react-router-redux';
import superagent from 'superagent';
import feathers from 'feathers-client';
import rest from 'feathers-rest/client';

import { user } from './user/reducer';
import * as userSagas from './user/saga';

export const rootReducer = combineReducers({
  user,
  routing: routerReducer,
});

export function* rootSaga() {
  yield [
    ...Object.values(userSagas),
  ].map(fork);
}

const host = 'http://localhost:3030';
export const app = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(feathers.hooks())
  .configure(feathers.authentication({ storage: window.localStorage }));

export const usersService = app.service('users');
export const recipesService = app.service('recipes');