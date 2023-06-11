import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tweetsReducer } from './tweetsSlice';
import { filtersReducer } from './filtersSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isFollowing'],
};

export const store = configureStore({
  reducer: {
    tweets: persistReducer(authPersistConfig, tweetsReducer),
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
