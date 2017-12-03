import { fork, call, put, takeEvery } from 'redux-saga/effects';
import { getRecentRecipes, createRecipe, fetchRecipe, signup, login, logout, fetchMyRecipes } from '../services/api';
import { browserHistory } from 'react-router';

function* fetchRecentRecipes(feathersApp) {
  const recipes = yield call(getRecentRecipes, feathersApp);
  yield put({ type: 'RECENT_RECIPES_SUCCEEDED', recipes });
}

function* recentRecipesSaga(feathersApp) {
  yield takeEvery('RECENT_RECIPES_REQUESTED', fetchRecentRecipes, feathersApp);
}

function* addRecipe(feathersApp, action) {
  const response = yield call(createRecipe, feathersApp, action.recipe);
  // yield put({type: 'ADD_RECIPE_SUCCEEDED', recipe});
  // console.log('recipe created: ', response);
  yield browserHistory.push('');
}

function* addRecipeSaga(feathersApp) {
  yield takeEvery('ADD_RECIPE_REQUESTED', addRecipe, feathersApp);
}

function* callFetchRecipe(feathersApp, action) {
  const recipe = yield call(fetchRecipe, feathersApp, action.id);
  yield put({ type: 'RECIPE_FETCH_DONE', recipe });
}

function* fetchRecipeSaga(feathersApp) {
  yield takeEvery('RECIPE_FETCH_REQUESTED', callFetchRecipe, feathersApp);
}

function* callSignup(feathersApp, action) {
  const success = yield call(signup, feathersApp, action.username, action.password);
  console.log('success: ', success);
  yield browserHistory.push('login');
}

function* signupSaga(feathersApp) {
  yield takeEvery('SIGNUP_REQUESTED', callSignup, feathersApp);
}

function* tryLogin(feathersApp, action) {
  const user = yield call(login, feathersApp, action.username, action.password);
  // console.log('tryLogin: ', user);
  yield put({ type: 'LOGIN_DONE', user });
  if (user && user.hasOwnProperty('accessToken')) {
    yield browserHistory.push(action.next);
  }
}

function* loginSaga(feathersApp) {
  yield takeEvery('LOGIN_REQUESTED', tryLogin, feathersApp);
}

function* callLogOut(feathersApp) {
  yield call(logout, feathersApp);
  yield put({ type: 'LOGOUT_DONE' });
  yield browserHistory.push('');
}

function* logoutSaga(feathersApp) {
  yield takeEvery('LOGOUT_REQUESTED', callLogOut, feathersApp);
}


function* callMyFetchRecipe(feathersApp, action) {
  const myRecipes = yield call(fetchMyRecipes, feathersApp, action.id);
  yield put({ type: 'MY_RECIPE_FETCH_DONE', myRecipes });
}

function* myRecipeSaga(feathersApp) {
  yield takeEvery('MY_RECIPE_FETCH_REQUESTED', callMyFetchRecipe, feathersApp);
}
export default function* root(feathersApp) {
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

