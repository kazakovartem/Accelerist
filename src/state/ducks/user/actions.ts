import { createAction } from '@reduxjs/toolkit';
import types, { IAddUser } from './types';

const addUser = createAction<IAddUser>(types.ADD_USER);

export default {
  addUser
};
