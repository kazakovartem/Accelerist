import { createSlice } from '@reduxjs/toolkit';
import * as operations from './operations';
import { OneLastLoginState } from './types';

type LastLoginState = {
  id: string;
  userId: string;
  loggedInAt: string;
  user: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    isAuthorized: boolean;
    imported: boolean;
    teamId: string;
    role: string;
    linkedinLink: string | null;
    isReceivingNotifications: boolean;
    avatarKey: string | null;
    loggedInAt: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
};

const LastLogin = createSlice({
  name: 'lastLogin',
  initialState: <LastLoginState[]>[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(operations.getLastLogin.pending, (state) => {
        // Login started
      })
      .addCase(operations.getLastLogin.fulfilled, (state, action) => {
        // succeeded signInUser
        state.splice(0, state.length);
        // eslint-disable-next-line array-callback-return
        action.payload.map((LastLog: OneLastLoginState) => {
          state.push(LastLog);
        });
      });
  },
});

export default LastLogin.reducer;
