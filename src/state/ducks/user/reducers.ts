import { createSlice } from '@reduxjs/toolkit';
import * as operations from './operations';

type UserState = {
  email: string;
  token: string;
  status: null | string;
  id: string;
  firstName: null | string;
  lastName: null | string;
  isAuthorized: boolean;
  role: string;
  teamId: string;
  loggedInAt: string;
  createdAt: string;
  updatedAt: string;
  avatarKey: string | null;
  deletedAt: string | null;
  imported: boolean;
  isReceivingNotifications: boolean;
  linkedinLink: string | null;
};

const User = createSlice({
  name: 'user',
  initialState: <UserState>{
    email: '',
    token: '',
    id: '',
    firstName: '',
    lastName: '',
    isAuthorized: false,
    role: '',
    teamId: '',
    loggedInAt: '',
    createdAt: '',
    updatedAt: '',
    avatarKey: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(operations.signInUser.pending, (state) => {
        // started signInUser
        state.status = 'Loading';
      })
      .addCase(operations.signInUser.fulfilled, (state, action) => {
        // succeeded signInUser
        state.status = 'Resolved';
        state.token = action.payload.accessToken;
        state.email = action.payload.user.email;
        state.id = action.payload.user.id;
        state.firstName = action.payload.user.firstName;
        state.lastName = action.payload.user.lastName;
        state.isAuthorized = action.payload.user.isAuthorized;
        state.role = action.payload.user.role;
        state.teamId = action.payload.user.teamId;
        state.loggedInAt = action.payload.user.loggedInAt;
        state.createdAt = action.payload.user.createdAt;
        state.updatedAt = action.payload.user.updatedAt;
        state.avatarKey = action.payload.user.avatarKey;
      })
      .addCase(operations.signInUser.rejected, (state) => {
        // failed signInUser
        state.status = 'Error';
      })
      .addCase(operations.signUpUser.pending, (state) => {
        // started signUpUser
        state.status = 'Loading';
      })
      .addCase(operations.signUpUser.fulfilled, (state, action) => {
        // succeeded signUpUser
        state.status = 'Resolved';
        state.token = action.payload.accessToken;
        state.email = action.payload.user.email;
        state.id = action.payload.user.id;
        state.firstName = action.payload.user.firstName;
        state.lastName = action.payload.user.lastName;
        state.isAuthorized = action.payload.user.isAuthorized;
        state.role = action.payload.user.role;
        state.teamId = action.payload.user.teamId;
        state.loggedInAt = action.payload.user.loggedInAt;
        state.createdAt = action.payload.user.createdAt;
        state.updatedAt = action.payload.user.updatedAt;
        state.avatarKey = action.payload.user.avatarKey;
      })
      .addCase(operations.signUpUser.rejected, (state) => {
        // failed signUpUser
        state.status = 'Error';
      })
      .addCase(operations.sendMail.pending, (state) => {
        // started sendMail
        state.status = 'Loading';
      })
      .addCase(operations.sendMail.fulfilled, (state) => {
        // succeeded sendMail
        state.status = 'Resolved';
      })
      .addCase(operations.sendMail.rejected, (state) => {
        // failed sendMail
        state.status = 'Error';
      })
      .addCase(operations.changePassword.pending, (state) => {
        // started changePassword
        state.status = 'Loading';
      })
      .addCase(operations.changePassword.fulfilled, (state) => {
        // started changePassword
        state.status = 'Resolved';
      })
      .addCase(operations.changePassword.rejected, (state) => {
        // failed changePassword
        state.status = 'Error';
      })
      .addCase(operations.addToken.fulfilled, (state, action) => {
        // started changePassword
        state.status = 'Resolved';
        state.token = action.payload;
      });
  },
});

export default User.reducer;
