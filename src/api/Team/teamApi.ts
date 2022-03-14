import { api } from '../httpClient';
import { GET_TEAM } from '../types';

export async function getTeam() {
  return await api.get(GET_TEAM).catch((error) => error);
}

export default {
  getTeam,
};
