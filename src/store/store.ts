import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './slices/customerSlice';
import accountReducer from './slices/accountSlice';

export const store = configureStore({
  reducer: {
    customer: customerReducer,
    account: accountReducer,
    // transfer: transferReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch =typeof store.dispatch;
