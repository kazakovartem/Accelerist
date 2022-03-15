import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api';
import { store } from '../../store';
import {
  UserResponse,
  SignInPayload,
  SendMailPayload,
  SignUpPayload,
  ChangePasswordPayload,
  AddTokenPayload,
  UserSignUpResponse,
} from './types';

type DefaultRejectValue = {
  error: { message: string };
  meta: {
    aborted: boolean;
    arg: {
      email: string;
      password: string;
    };
    condition: boolean;
    rejectedWithValue: boolean;
    requestId: string;
    requestStatus: string;
  };
  payload: string;
  type: string;
};
type AppDispatch = typeof store.dispatch;
type State = {
  user: {
    email: string;
    password: string;
    token: string;
    status: null | string;
    error: null | string;
  };
};
export type ExtraParamsThunkType<T = DefaultRejectValue> = {
  extra: { api: typeof api };
  rejectValue: T;
  dispatch: AppDispatch;
  state: State;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type SendMailResponse = {};

type AddTokenResponse = string;

export const signInUser = createAsyncThunk<
  UserResponse,
  SignInPayload,
  ExtraParamsThunkType<DefaultRejectValue>
>('user/sign_in', async ({ email, password }: SignInPayload, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.user.signIn(email, password);
    if (response.status === 201) {
      return response.data;
    }
    if (response.response.data.statusCode === 401) {
      throw new Error(response.response.data.message);
    } else {
      throw new Error('internal server error');
    }
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const signUpUser = createAsyncThunk<
  UserSignUpResponse,
  SignUpPayload,
  ExtraParamsThunkType<DefaultRejectValue>
>('user/sign_up', async ({ email, password }: SignUpPayload, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.user.signUp(email, password);
    if (response.status === 201) {
      return response.data;
    }
    if (response.response.data.statusCode === 422) {
      throw new Error(response.response.data.message);
    } else {
      throw new Error('internal server error');
    }
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const sendMail = createAsyncThunk<
  SendMailResponse,
  SendMailPayload,
  ExtraParamsThunkType<DefaultRejectValue>
>('user/send_mail', async ({ email }: SendMailPayload, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.user.sendMail(email);
    if (response.status === 201) {
      return response.data;
    }
    if (response.response.data.statusCode === 422) {
      throw new Error(response.response.data.message);
    } else {
      throw new Error('internal server error');
    }
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const changePassword = createAsyncThunk<
  SendMailResponse,
  ChangePasswordPayload,
  ExtraParamsThunkType<DefaultRejectValue>
>(
  'user/change_password',
  async ({ password, passwordConfirm }: ChangePasswordPayload, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.user.changePassword(password, passwordConfirm);
      if (response.status === 201) {
        return response.data;
      }
      if (response.response.data.statusCode === 422) {
        throw new Error(response.response.data.message);
      } else {
        throw new Error('internal server error');
      }
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const addToken = createAsyncThunk<
  AddTokenResponse,
  AddTokenPayload,
  ExtraParamsThunkType<DefaultRejectValue>
>('user/add_token', async ({ token }: AddTokenPayload, { rejectWithValue }) => {
  try {
    return token;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export default {
  signInUser,
  signUpUser,
  sendMail,
  changePassword,
  addToken,
};
