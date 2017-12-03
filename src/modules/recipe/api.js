import { recipesService } from '../index';

export async function findRecipe(payload) {
  try {
    return await recipesService.find(payload)
  } catch(err) {
    console.log(err);
    return [];
  }
}

export async function createRecipe(payload) {
  try {
    return await recipesService.createAction(payload);
  } catch(err) {
    console.log(err);
    return {};
  }
}