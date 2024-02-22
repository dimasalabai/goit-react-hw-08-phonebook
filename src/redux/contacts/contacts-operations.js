import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactsApi from '../../api/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await contactsApi.requestFetchContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactsApi.requestAddContacts(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: ({ name, number }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const normalizedPhone = number.toLowerCase();

      const dublicate = contacts.items.find(item => {
        const normalizedCurrentName = item.name.toLowerCase();
        const normalizedCurrentPhone = item.number.toLowerCase();

        return (
          normalizedCurrentName === normalizedName ||
          normalizedCurrentPhone === normalizedPhone
        );
      });

      if (dublicate) {
        alert(
          `Contact with this ${
            name || number
          } already in contacts book.\nCheck the entered data`
        );
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact ',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.requestDeleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
