import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

// axios.defaults.baseURL = 'https://652514f667cfb1e59ce68a81.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', { name, number });
      toast.success('Contact successfully added!', { position: 'top-right' });
      return data;
    } catch (e) {
      toast.error('Error while adding!', { position: 'top-right' });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/delete',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      toast.success('Deleted successfully!', { position: 'top-right' });
      return data;
    } catch (e) {
      toast.error('Delete error!', { position: 'top-right' });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contact/update',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      toast.success('Updated successfully!', { position: 'top-right' });
      return data;
    } catch (e) {
      toast.error('Update error!', { position: 'top-right' });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
