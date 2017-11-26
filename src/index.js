import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';
import SingleRecipe from './components/SingleRecipe';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import MyRecipes from './components/MyRecipes';

import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store, {history, app} from './store';
import {authGood} from './actions/actionCreators';
import {requireAuthentication} from './components/Auth';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='/recipes/add' component={requireAuthentication(AddRecipe)}></Route>
        <Route path='/view/:recipeId' component={SingleRecipe}></Route>
        <Route path='/signup' component={SignupPage}></Route>
        <Route path='/login' component={LoginPage}></Route>
        <Route path='/profile/recipes' component={requireAuthentication(MyRecipes)}></Route>
      </Route>
    </Router>
  </Provider>
);

app.authenticate().then(user => {
  // console.log('authenticated user: ', user);
  store.dispatch(authGood(user));
  ReactDOM.render(
    router,
    document.getElementById('root')
  );
}, (e) => {
  console.log('e: ', e);
  ReactDOM.render(
    router,
    document.getElementById('root')
  );
});
