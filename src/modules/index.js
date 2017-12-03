import { combineReducers } from 'redux';
import { fork, all } from 'redux-saga/effects';
import { routerReducer } from 'react-router-redux';
import superagent from 'superagent';
import feathers from 'feathers-client';
import rest from 'feathers-rest/client';

import { user } from './user/reducer';
import { currRecipe, myRecipes, recipes } from './recipe/reducer';
import * as userSagas from './user/saga';
import * as recipeSagas from './recipe/saga';

export const rootReducer = combineReducers({
  user,
  currRecipe,
  myRecipes,
  recipes,
  routing: routerReducer,
});

export function* rootSaga() {
  yield all([
    ...Object.values(userSagas),
    ...Object.values(recipeSagas),
  ].map(fork));
}

const host = 'http://localhost:3030';
export const app = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(feathers.hooks())
  .configure(feathers.authentication({ storage: window.localStorage }));

export const usersService = app.service('users');
export const recipesService = app.service('recipes');
