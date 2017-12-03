import { recipesService } from '../index';

export async function findRecipes(payload) {
  try {
    const recipes = await recipesService.find(payload);
    if(recipes && recipes.data instanceof Array) {
      return recipes.data;
    }

    return [];
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function createRecipe(payload) {
  try {
    return await recipesService.createAction(payload);
  } catch (err) {
    console.log(err);
    return {};
  }
}
