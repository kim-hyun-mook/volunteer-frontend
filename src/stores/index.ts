import { configureStore } from '@reduxjs/toolkit';
import communityReducer from '@stores/slices/NavCatrgorySlice.ts';

const store = configureStore({
  reducer: {
    community: communityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
