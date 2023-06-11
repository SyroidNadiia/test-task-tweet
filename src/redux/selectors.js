import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

export const getTweets = state => state.tweets.items;

export const getIsFollowing = state => state.tweets.isFollowing;

export const getIsLoading = state => state.tweets.isLoading;

export const getTotalItems = state => state.tweets.totalItems;

export const getError = state => state.tweets.error;

export const getStatusFilter = state => state.filters.status;

export const selectVisibleTweets = createSelector(
  [getTweets, getStatusFilter, getIsFollowing],
  (tweets, statusFilter, isFollowing) => {
    switch (statusFilter) {
      case statusFilters.follow:
        return tweets.filter(tweet => !isFollowing.includes(tweet.id));
      case statusFilters.followings:
        return tweets.filter(tweet => isFollowing.includes(tweet.id));
      default:
        return tweets;
    }
  }
);
