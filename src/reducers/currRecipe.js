function currRecipe(state = {}, action) {
  switch (action.type) {
    case 'RECIPE_FETCH_DONE':
      // console.log('action: ', action);
      return action.recipe.length ? action.recipe[0] : {};

    default:
      return state;
  }
}

export default currRecipe;
