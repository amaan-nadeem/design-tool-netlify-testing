import { configureStore } from "@reduxjs/toolkit";

// Slices
import selectionSlice from "./slices/selectionSlice";

const store = configureStore({
  reducer: {
    selection: selectionSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
