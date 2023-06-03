import { createSlice } from '@reduxjs/toolkit';
import { fetchTweets } from './operations';

const initialState = {
  items: [],
  isFollowing: [],
  isLoading: false,
  error: null,
};

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    addFollowing(state, action) {
      state.isFollowing.push(action.payload);
    },
    deleteFollowing(state, action) {
      const index = state.isFollowing.findIndex(id => id === action.payload);
      if (index !== -1) {
        state.isFollowing.splice(index, 1);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTweets.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(...action.payload);
      })
      .addCase(fetchTweets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const tweetsReducer = tweetsSlice.reducer;
