// import {} from 'redux-saga';
import {fork, call, put, takeEvery} from 'redux-saga/effects';
import {getRecentRecipes, createRecipe, fetchRecipe, signup, login} from '../services/api';
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

function* callFetchRecipe(feathersApp, action) {
  const recipe = yield call(fetchRecipe, feathersApp, action.id);
  yield put({type: 'RECIPE_FETCH_DONE', recipe});
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
  console.log('user: ', user);
  yield put({type: 'LOGIN_DONE', user: user || {} })
  if(user) {
    yield browserHistory.push('');
  }
}

function* loginSaga(feathersApp) {
  yield takeEvery('LOGIN_REQUESTED', tryLogin, feathersApp);
}
export default function* root(feathersApp) {
  yield [
    fork(recentRecipesSaga, feathersApp),
    fork(addRecipeSaga, feathersApp),
    fork(fetchRecipeSaga, feathersApp),
    fork(signupSaga, feathersApp),
    fork(loginSaga, feathersApp)
  ];
}



