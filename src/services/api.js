export function getRecentRecipes(app) {
  const recipes = app.service('recipes');
  return recipes.find({
    query: {'$sort': { 'createdAt': -1}}
  }).then((data,err) => data.data);
}