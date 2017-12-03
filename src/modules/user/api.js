import { app, usersService } from '../index';

export async function signup(payload) {
  try {
    return await usersService.create(payload);
  } catch (e) {
    console.log(e);
    return {};
  }

}

export async function login(payload) {

  try {
    return await app.authenticate({
      strategy: 'local',
      ...payload
    });
  } catch(err) {
    console.log(err)
    return null;
  }
}

export function logout() {
  return app.logout();
}