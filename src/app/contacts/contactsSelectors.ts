import { RootState } from "../store";
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state: RootState) => state.contactList.contacts;
export const selectIsLoading = (state: RootState) => state.contactList.isLoading;
export const selectError = (state: RootState) => state.contactList.error;
export const selectFilter = (state: RootState) => state.filter.filters;
export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    return contacts?.filter(item =>
      item.name.toLowerCase().includes(filter?.toLowerCase())
    );
  }
);
