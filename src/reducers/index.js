import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipes';
import currRecipe from './currRecipe';
import checkLogin from './checkLogin';
import myRecipes from './myRecipes';

const rootReducer = combineReducers({
  recipes,
  currRecipe,
  checkLogin,
  myRecipes,
  routing: routerReducer,
});

export default rootReducer;
