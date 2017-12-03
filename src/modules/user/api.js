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
    const user = await app.authenticate({
      strategy: 'local',
      ...payload,
    });
    // console.log('awts: ', user);
    return user;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export function logout() {
  return app.logout();
}
