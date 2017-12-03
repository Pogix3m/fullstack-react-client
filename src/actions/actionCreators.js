export function recentRecipes() {
  return {
    type: 'RECENT_RECIPES_REQUESTED',
  };
}

export function addRecipe(recipe) {
  return {
    type: 'ADD_RECIPE_REQUESTED', ...recipe,
  };
}

export function fetchRecipe(id) {
  return {
    type: 'RECIPE_FETCH_REQUESTED',
    id,
  };
}

export function fetchMyRecipes(id) {
  return {
    type: 'MY_RECIPE_FETCH_REQUESTED',
    id,
  };
}
