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

export function fetchRecipe(app, id) {
  const service = app.service('recipes');
  return service.find({
    query: {'_id': id}
  }).then((data,err) => data.data);

}

export function signup(app, email, password) {
  const service = app.service('users');
  return service.create({
    email, password
  }).then((data, err) => data);
}

export function login(app, email, password) {
  // console.log('email: ', email);
  // console.log('password: ', password);
  return app.authenticate({
    strategy: 'local',
    email,
    password})
    .then(response => response)
    .catch(e => {
      console.log('Log in error: ', e);
       return null;
    });
}

export function logout(app) {
  return app.logout();
}