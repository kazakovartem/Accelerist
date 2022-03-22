import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import api from '../../../api';
import { SortSavedList } from '../../../types';
import { store } from '../../store';
import { DefaultRejectValue } from './types';

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

type SavedGetResponse = {
  items: [
    {
      id: string;
      name: string;
      filters: any;
      prospectsAvailable: number;
      createdAt: string;
      updatedAt: string;
      lastAuthor: {
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
        loggedInAt: string | null;
        createdAt: string;
        updatedAt: string;
        deletedAt: string | null;
      }
    },
  ],
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: string;
    totalPages: number;
    currentPage: string;
  }
};

// eslint-disable-next-line @typescript-eslint/ban-types
type GetSavedPayload = {
  page: number;
  limit: number;
  sort: SortSavedList;
};

type GetSavedProps = {
  page: number;
  limit: number;
  sort: SortSavedList;
};

export const getSaved = createAsyncThunk<
  SavedGetResponse,
  GetSavedPayload,
  {
    extra: { api: typeof api };
    rejectValue: DefaultRejectValue;
  }
// eslint-disable-next-line no-empty-pattern
>('saved/get', async ({ page, limit, sort }:GetSavedProps, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.saved.getSaved(page, limit, sort);
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
  getSaved,
};
