import { api } from '../httpClient';
import { GET_FAVORITES_COMPANY } from '../types';

export async function getFavoritesCompany(page: number, limit: number) {
  return await api.get(`${GET_FAVORITES_COMPANY}?page=${page}&limit=${limit}`).catch((error) => error);
}

export default {
  getFavoritesCompany,
};
