import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { accountService } from '../../services/api/accountService';
import { Account } from '../../types/account';

interface AccountState {
  account: Account | null;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: AccountState = {
  account: null,
  status: 'idle',
  error: null,
};

export const fetchAccount = createAsyncThunk(
  'account/fetch',
  async (accountId: string) => {
    const account = await accountService.getAccount(accountId);
    return account;
  }
);

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccount.fulfilled, (state, action) => {
        state.status = 'idle';
        state.account = action.payload;
        state.error = null;
      })
      .addCase(fetchAccount.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch account';
      });
  },
});

export default accountSlice.reducer;
