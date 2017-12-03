import React from 'react';

import { history, app } from './store';

import App from '../modules/App';
import Home from '../modules/Home';
import AddRecipe from '../modules/AddRecipe';
import SingleRecipe from '../modules/SingleRecipe';
import SignupPage from '../modules/SignupPage';
import LoginPage from '../modules/LoginPage';
import MyRecipes from '../modules/MyRecipes';

import { Router, Route, IndexRoute } from 'react-router';

import { requireAuthentication } from '../modules/Auth';

export default () => {
  <Router history={history}>
    <IndexRoute component={Home} />
    <Route path="/recipes/add" component={requireAuthentication(AddRecipe)} />
    <Route path="/view/:recipeId" component={SingleRecipe} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/profile/recipes" component={requireAuthentication(MyRecipes)} />
  </Router>;
};
