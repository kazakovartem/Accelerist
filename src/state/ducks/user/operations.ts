import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import api from '../../../api';
import {
  UserResponse,
  SignInPayload,
  SendMailPayload,
  SignUpPayload,
  ChangePasswordPayload,
  AddTokenPayload,
  UserSignUpResponse,
  DefaultRejectValue,
} from './types';

// eslint-disable-next-line @typescript-eslint/ban-types
type SendMailResponse = {};

type AddTokenResponse = string;

export const signInUser = createAsyncThunk<
  UserResponse,
  SignInPayload,
  {
    extra: { api: typeof api };
    rejectValue: DefaultRejectValue;
  }
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
  } catch (error: any) {
    const err: AxiosError<ValidationErrors> = error;
    if (!err.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

export const signUpUser = createAsyncThunk<
  UserSignUpResponse,
  SignUpPayload,
  {
    extra: { api: typeof api };
    rejectValue: DefaultRejectValue;
  }
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
  } catch (error: any) {
    const err: AxiosError<ValidationErrors> = error;
    if (!err.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});

export const sendMail = createAsyncThunk<
  SendMailResponse,
  SendMailPayload,
  {
    extra: { api: typeof api };
    rejectValue: DefaultRejectValue;
  }
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
  } catch (error: any) {
    const err: AxiosError<ValidationErrors> = error;
    if (!err.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});

export const changePassword = createAsyncThunk<
  SendMailResponse,
  ChangePasswordPayload,
  {
    extra: { api: typeof api };
    rejectValue: DefaultRejectValue;
  }
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
    } catch (error: any) {
      const err: AxiosError<ValidationErrors> = error;
      if (!err.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const addToken = createAsyncThunk<
  AddTokenResponse,
  AddTokenPayload,
  {
    extra: { api: typeof api };
    rejectValue: DefaultRejectValue;
  }
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
