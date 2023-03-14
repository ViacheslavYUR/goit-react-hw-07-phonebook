import { createSlice } from '@reduxjs/toolkit';

import { fetchAllContacts, fetchAddContact, fetchDeleteContact } from './contacts-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchAllContacts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchAddContact.pending, state => {
        state.loading = true;
      })
      .addCase(fetchAddContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log(state);
        console.log(payload);
        state.items.push(payload);
      })
      .addCase(fetchAddContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchDeleteContact.pending, state => {
        state.loading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== payload);
      })
      .addCase(fetchDeleteContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
export default contactsSlice.reducer;
