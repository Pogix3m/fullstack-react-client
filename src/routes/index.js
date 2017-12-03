import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import { history } from '../store';

import Home from './Home';
import AddRecipe from './AddRecipe';
import SingleRecipe from './SingleRecipe';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import MyRecipes from './MyRecipes';

import { Route, Router, Link } from 'react-router-dom';

import requireAuthentication from '../components/Auth';
import NavBar from '../components/NavBar';

export default () => (
  <Router history={history}>
    <Container>
      <Header as="h1" textAlign="center">
        <Link to="/">Menu Monkey</Link>
      </Header>
      <NavBar />

      <Route exact path="/" component={Home} />
      <Route path="/profile/recipes" component={requireAuthentication(MyRecipes)} />
      <Route path="/recipes/add" component={requireAuthentication(AddRecipe)} />
      <Route path="/view/:recipeId" component={SingleRecipe} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
    </Container>
  </Router>
);
