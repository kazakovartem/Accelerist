import { api } from '../httpClient';
import { GET_TEAM, GET_LAST_LOGIN } from '../types';

export async function getTeam() {
  return await api.get(GET_TEAM).catch((error) => error);
}

export async function getLastLogin() {
  return await api.get(GET_LAST_LOGIN).catch((error) => error);
}

export default {
  getTeam,
  getLastLogin,
};
