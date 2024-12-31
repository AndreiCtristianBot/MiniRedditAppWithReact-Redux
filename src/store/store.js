import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../features/redditSlice';

const store = configureStore({
  reducer: {
    reddit: redditReducer,
  },
});

export default store;
