import { call, put, takeEvery } from 'redux-saga/effects';
import { history } from '../../store';

import { findRecipes, createRecipe } from './api';
import {
  RECENT_RECIPES_REQUESTED,
  recentRecipesSucceeded,
  ADD_RECIPE_REQUESTED,
  RECIPE_FETCH_REQUESTED,
  recipeFetchDone,
  MY_RECIPE_FETCH_REQUESTED,
  myRecipeFetchDone,
} from './action';


function* fetchRecentRecipes({ payload }) {
  const recipes = yield call(findRecipes, payload);
  yield put(recentRecipesSucceeded(recipes));
}

export function* recentRecipesSaga() {
  yield takeEvery(RECENT_RECIPES_REQUESTED, fetchRecentRecipes);
}

function* addRecipe({ payload }) {
  const response = yield call(createRecipe, payload.recipe);
  // yield put({type: 'ADD_RECIPE_SUCCEEDED', recipe});
  console.log('recipe created: ', response);
  yield history.push('');
}

export function* addRecipeSaga() {
  yield takeEvery(ADD_RECIPE_REQUESTED, addRecipe);
}

function* callFetchRecipe({ payload }) {
  const recipe = yield call(findRecipes, payload);
  yield put(recipeFetchDone(recipe));
}

export function* fetchRecipeSaga() {
  yield takeEvery(RECIPE_FETCH_REQUESTED, callFetchRecipe);
}

function* callMyFetchRecipe({ payload }) {
  const myRecipes = yield call(findRecipes, payload);
  yield put(myRecipeFetchDone(myRecipes));
}

export function* myRecipeSaga() {
  yield takeEvery(MY_RECIPE_FETCH_REQUESTED, callMyFetchRecipe);
}

