// import { createSelector } from '@reduxjs/toolkit';

export const getTweets = state => state.tweets.items;

export const getIsFollowing = state => state.tweets.isFollowing;

export const getIsLoading = state => state.tweets.isLoading;

export const getTotalItems = state => state.tweets.totalItems;

export const getError = state => state.tweets.error;

export const getFilter = state => state.filter;

// export const getFilteredContacts = createSelector(
//   [getTweets, getFilter],
//   (contacts, filter) => {
//     if (!Array.isArray(contacts)) {
//       return [];
//     }

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
