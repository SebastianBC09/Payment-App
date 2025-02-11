import { configureStore } from "@reduxjs/toolkit";
//TODO IMPORT REDUCERS

export const store = configureStore({
  reducer: {
    customer: customerReducer,
    account: accountReducer,
    transfer: transferReducer,
  },
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch =typeof store.dispatch;
