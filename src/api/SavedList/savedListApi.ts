import { api } from '../httpClient';
import { GET_SAVED_LIST } from '../types';
import { SortSavedList } from '../../types';

export async function getSaved(page: number, limit: number, sort: SortSavedList) {
  return await api.get(`${GET_SAVED_LIST}?page=${page}&limit=${limit}&sort=${sort}`).catch((error) => error);
}

export default {
  getSaved,
};
