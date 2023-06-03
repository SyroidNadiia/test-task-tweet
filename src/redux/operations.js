import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://64635bce7a9eead6fae46361.mockapi.io/tweets';

export const fetchTweets = createAsyncThunk(
  'tweets/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`?limit=3&page=${page}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
