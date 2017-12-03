import React from 'react';

import { history, app } from './store';

import Home from './Home';
import AddRecipe from './AddRecipe';
import SingleRecipe from './SingleRecipe';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import MyRecipes from './MyRecipes';

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
