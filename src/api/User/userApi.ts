import { api } from '../httpClient';
import { SIGN_IN, SIGN_UP, PASSWORD_SEND_MAIL, PASSWORD_CHANGE } from '../types';

export async function signIn(email: string, password: string) {
  return await api
    .post(SIGN_IN, {
      email,
      password,
    })
    .catch((error) => error);
}

export async function signUp(email: string, password: string) {
  return await api
    .post(SIGN_UP, {
      email,
      password,
    })
    .catch((error) => error);
}

export async function sendMail(email: string) {
  return await api
    .post(PASSWORD_SEND_MAIL, {
      email,
    })
    .catch((error) => error);
}

export async function changePassword(password: string, passwordConfirmation: string) {
  return await api
    .post(PASSWORD_CHANGE, {
      password,
      passwordConfirmation,
    })
    .catch((error) => error);
}

export default {
  signIn,
  signUp,
  sendMail,
  changePassword,
};
