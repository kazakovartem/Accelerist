import { api } from '../httpClient';
import { SIGN_IN, SIGN_UP } from '../types';

export async function signIn(emailUser: string, passwordUser: string) {
  return await api
    .post(SIGN_IN, {
      email: emailUser,
      password: passwordUser,
    })
    .catch((error) => error);
}

export async function signUp(emailUser: string, nameUser: string, passwordUser: string) {
  return await api
    .post(SIGN_UP, {
      email: emailUser,
      name: nameUser,
      password: passwordUser,
    })
    .catch((error) => error);
}

export default {
  signIn,
  signUp,
};
