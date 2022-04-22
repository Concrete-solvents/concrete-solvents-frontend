// Libraries
import { configureStore } from '@reduxjs/toolkit';

// Slices
import userSlice from '@Features/user/redux/userSlice/user.slice';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: ((getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
