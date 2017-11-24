export function getRecentRecipes(app) {
  const recipes = app.service('recipes');
  return recipes.find().then((data,err) => data.data);
}