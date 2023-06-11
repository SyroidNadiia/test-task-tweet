import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://64635bce7a9eead6fae46361.mockapi.io/tweets';

export const fetchTweets = createAsyncThunk(
  'tweets/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTweetsByPages = createAsyncThunk(
  'tweets/fetchTweetsByPages',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(`?limit=${limit}&page=${page}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeFollowers = createAsyncThunk(
  'tweets/changeFollowers',
  async ({ id, ...tweet }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/${id}`, tweet);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);