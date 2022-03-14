import axios, { AxiosRequestConfig } from 'axios';
import { API } from './types';
import { store } from '../state/store';

const accessToken = () => {
  const axiosToken = `Bearer `;
  return axiosToken;
};

const headers = {
  'Content-type': 'application/json;charset=UTF-8',
  accept: 'application/json, text/plain, */*',
  Authorization: accessToken(),
};

const axiosCfg: AxiosRequestConfig = {
  baseURL: API,
  headers,
};

export const api = axios.create(axiosCfg);

// eslint-disable-next-line @typescript-eslint/no-shadow
api.interceptors.request.use((axiosCfg) => {
  try {
    const { token } = store.getState().user;
    axiosCfg.headers!.Authorization = `Bearer ${token}`;
    return axiosCfg;
  } catch {
    axiosCfg.headers!.Authorization = `Bearer `;
    return axiosCfg;
  }
});
