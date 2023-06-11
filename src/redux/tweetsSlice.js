import { createSlice } from '@reduxjs/toolkit';
import { fetchTweets, fetchTweetsByPages, changeFollowers } from './operations';

const initialState = {
  items: [],
  isFollowing: [],
  isLoading: false,
  error: null,
  totalItems: 0,
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
        state.totalItems = action.payload.length;
      })
      .addCase(fetchTweets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchTweetsByPages.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTweetsByPages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const newItems = action.payload.filter(
          item => !state.items.some(existingItem => existingItem.id === item.id)
        );
        state.items.push(...newItems);
      })
      .addCase(fetchTweetsByPages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(changeFollowers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeFollowers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.map(tweet => {
          if (tweet.id === action.payload.id) {
            return (tweet = action.payload);
          }
          return tweet;
        });
      })
      .addCase(changeFollowers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const tweetsReducer = tweetsSlice.reducer;
export const { addFollowing, deleteFollowing } = tweetsSlice.actions;

