import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import superagent from 'superagent';
import feathers from 'feathers-client';
import rest from 'feathers-rest/client';

import recipes from './recipes';
import currRecipe from './currRecipe';
import checkLogin from './checkLogin';
import myRecipes from './myRecipes';

export const rootReducer = combineReducers({
  recipes,
  currRecipe,
  checkLogin,
  myRecipes,
  routing: routerReducer,
});

export function* rootSaga(feathersApp) {
  yield [
    fork(recentRecipesSaga, feathersApp),
    fork(addRecipeSaga, feathersApp),
    fork(fetchRecipeSaga, feathersApp),
    fork(signupSaga, feathersApp),
    fork(loginSaga, feathersApp),
    fork(logoutSaga, feathersApp),
    fork(myRecipeSaga, feathersApp),
  ];
}

const host = 'http://localhost:3030';
export const app = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(feathers.hooks())
  .configure(feathers.authentication({ storage: window.localStorage }));