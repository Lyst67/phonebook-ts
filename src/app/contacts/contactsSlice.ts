import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
  KnownError,
} from "./operations";

export interface Contact {
  id?: string;
  name: string;
  number: string;
}

export interface ContactState {
  contacts: Contact[];
  isLoading: boolean;
  error: KnownError | null | undefined;
}

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
} as ContactState

export const contactsSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          (item) => item.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          (item) => item.id === action.payload.id
        );
        state.contacts.splice(index, 1, action.payload);
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
