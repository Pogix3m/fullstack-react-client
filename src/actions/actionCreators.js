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