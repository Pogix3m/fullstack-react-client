export function recentRecipes() {
  return {
    type: 'RECENT_RECIPES_REQUESTED'
  };
}

export function addRecipe(recipe) {
  return {
    type: 'ADD_RECIPE_REQUESTED', ...recipe
  };
}

export function fetchRecipe(id) {
  return {
    type: 'RECIPE_FETCH_REQUESTED',
    id
  };
}

export function signup(username, password) {
  return {
    type: 'SIGNUP_REQUESTED',
    username,
    password
  };
}

export function login(username, password) {
  return {
    type: 'LOGIN_REQUESTED',
    username,
    password
  };
}

export function logout() {
  return {
    type: 'LOGOUT_REQUESTED'
  };
}