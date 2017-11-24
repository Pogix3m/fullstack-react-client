export function getRecentRecipes(app) {
  const recipes = app.service('recipes');
  return recipes.find({
    query: {'$sort': { 'createdAt': -1}}
  }).then((data,err) => data.data);
}

export function createRecipe(app, recipe) {
  const service = app.service('recipes');
  return service.create(recipe).then((data,err) => data);

}