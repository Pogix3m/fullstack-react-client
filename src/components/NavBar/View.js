import React from 'react';
import { Menu } from 'semantic-ui-react';
import { history } from '../../store';

const loggedIn = (email, logout) => {
  return (
    <Menu.Menu position="right">
      <Menu.Item name="user" onClick={() => history.push('/profile/recipes')}>{email}</Menu.Item>
      <Menu.Item name="logout" onClick={logout}>Logout</Menu.Item>
    </Menu.Menu>
  );
}

const loggedOut = () => {
  return (
    <Menu.Menu position="right">
      <Menu.Item name="signup" onClick={() => { history.push('signup'); }}>Sign Up</Menu.Item>
      <Menu.Item name="login" onClick={() => { history.push('login'); }}>Log in</Menu.Item>
    </Menu.Menu>
  );
}

export default ({user, logout}) =>  (
  <Menu>
    <Menu.Item
      name="addRecipe"
      onClick={() => history.push('/recipes/add')}>
      Add Recipe
    </Menu.Item>
    { user && user.hasOwnProperty('data') ? loggedIn(user.email, logout) : loggedOut()}
  </Menu>
)
