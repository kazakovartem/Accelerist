import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import api from '../../../api';
import { store } from '../../store';
import { DefaultRejectValue } from './types';

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

type LastLoginResponse = {
  id: string;
  userId: string;
  loggedInAt: string;
  user: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    isAuthorized: boolean,
    imported: boolean,
    teamId: string;
    role: string;
    linkedinLink: string | null;
    isReceivingNotifications: boolean,
    avatarKey: string | null;
    loggedInAt: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  }
};

// eslint-disable-next-line @typescript-eslint/ban-types
type GetLastLoginPayload = {};

export const getLastLogin = createAsyncThunk<
  LastLoginResponse[],
  GetLastLoginPayload,
  {
    extra: { api: typeof api };
    rejectValue: DefaultRejectValue;
  }
// eslint-disable-next-line no-empty-pattern
>('team/last_login', async ({}, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.team.getLastLogin();
    return response.data;
  } catch (error: any) {
    const err: AxiosError<ValidationErrors> = error;
    if (!err.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});

export default {
  getLastLogin,
};
