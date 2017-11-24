// import {} from 'redux-saga';
import {fork, call, put, takeEvery} from 'redux-saga/effects';
import {getRecentRecipes, createRecipe} from '../services/api';
import {browserHistory} from 'react-router';
// import {recentRecipes} from "../actions/actionCreators";

function* fetchRecentRecipes(feathersApp) {
  const recipes = yield call(getRecentRecipes, feathersApp);
  yield put({type: 'RECENT_RECIPES_SUCCEEDED', recipes});
}

function* recentRecipesSaga(feathersApp) {
  yield takeEvery('RECENT_RECIPES_REQUESTED', fetchRecentRecipes, feathersApp)
}

function* addRecipe(feathersApp, action) {
  const response = yield call(createRecipe, feathersApp, action.recipe);
  // yield put({type: 'ADD_RECIPE_SUCCEEDED', recipe});
  // console.log('recipe created: ', response);
  yield browserHistory.push('');
}

function* addRecipeSaga(feathersApp) {
  yield takeEvery('ADD_RECIPE_REQUESTED', addRecipe, feathersApp)
}

export default function* root(feathersApp) {
  yield [
    fork(recentRecipesSaga, feathersApp),
    fork(addRecipeSaga, feathersApp)
  ];
}