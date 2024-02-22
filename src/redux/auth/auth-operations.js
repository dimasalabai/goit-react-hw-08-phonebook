import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signUpRequest,
  loginRequest,
  currentRequest,
  logoutRequest,
} from 'api/auth-api';

import { toast } from 'react-toastify';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signUpRequest(body);
      // toast.success('Success!', { position: 'top-center' }); Перекидає на іншу сторінку, тому не потрібно
      return data;
    } catch (error) {
      toast.error(error.response.data.message, { position: 'top-center' });

      return rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginRequest(body);
      // toast.success('Success!', { position: 'top-center' }); Перекидає на іншу сторінку, тому не потрібно
      return data;
    } catch (error) {
      toast.error('Incorrect email or password', { position: 'top-center' });

      return rejectWithValue(error.response.data.message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await currentRequest(auth.token);
      return data;
    } catch (error) {
      toast.error(error.response.data.message, { position: 'top-center' });
      return rejectWithValue(error.response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutRequest();
      return data;
    } catch (error) {
      toast.error(error.response.data.message, { position: 'top-center' });
      return rejectWithValue(error.response.data.message);
    }
  }
);
