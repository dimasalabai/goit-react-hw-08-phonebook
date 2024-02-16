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
    condition: ({ name, phone }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const normalizedPhone = phone.toLowerCase();

      const dublicate = contacts.items.find(item => {
        const normalizedCurrentName = item.name.toLowerCase();
        const normalizedCurrentPhone = item.phone.toLowerCase();

        return (
          normalizedCurrentName === normalizedName ||
          normalizedCurrentPhone === normalizedPhone
        );
      });

      if (dublicate) {
        alert(
          `Contact with this ${
            name || phone
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

// export const fetchContacts = () => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetchContactsLoading());
//       const data = await contactsApi.requestFetchContacts();
//       dispatch(fetchContactsSuccess(data));
//     } catch (error) {
//       dispatch(fetchContactsError(error.message));
//     }
//   };

//   return func;
// };

// export const addContact = body => {
//   const func = async dispatch => {
//     try {
//       dispatch(addContactLoading());
//       const data = await contactsApi.requestAddContacts(body);
//       dispatch(addContactSuccess(data));
//     } catch (error) {
//       dispatch(addContactError(error.message));
//     }
//   };
//   return func;
// };

// export const deleteContact = id => {
//   const func = async dispatch => {
//     try {
//       dispatch(deleteContactLoading());
//       await contactsApi.requestDeleteContact(id);
//       dispatch(deleteContactSuccess(id));
//     } catch (error) {
//       dispatch(deleteContactError(error.message));
//     }
//   };

//   return func;
// };
