import { createSlice } from '@reduxjs/toolkit';
import * as operations from './operations';
import { OneItemState } from './types';

type SavedState = {
  items: {
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
  }[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: string;
    totalPages: number;
    currentPage: string;
  }
};

const Saved = createSlice({
  name: 'savedList',
  initialState: <SavedState>{ items: [{}], meta: {} },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(operations.getSaved.pending, (state) => {
        // started
      })
      .addCase(operations.getSaved.fulfilled, (state, action) => {
        // succeeded
        state.items.splice(0, state.items.length);
        // eslint-disable-next-line array-callback-return
        action.payload.items.map((savedItem: OneItemState) => {
          state.items.push(savedItem);
        });
        state.meta.currentPage = action.payload.meta.currentPage;
        state.meta.totalItems = action.payload.meta.totalItems;
        state.meta.itemCount = action.payload.meta.itemCount;
        state.meta.itemsPerPage = action.payload.meta.itemsPerPage;
        state.meta.totalPages = action.payload.meta.totalPages;
      });
  },
});

export default Saved.reducer;
