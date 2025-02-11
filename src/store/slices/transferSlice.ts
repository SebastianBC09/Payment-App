import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { transferService } from '../../services/api/transferService';
import { TransferFee, TransferRequest, TransferRequestResponse } from '../../types/transfer';

interface TransferState {
  fees: TransferFee[] | null;
  currentTransfer: TransferRequestResponse | null;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: TransferState = {
  fees: null,
  currentTransfer: null,
  status: 'idle',
  error: null,
};

export const fetchTransferFees = createAsyncThunk(
  'transfer/fetchFees',
  async ({ amount, currencies }: { amount: number; currencies: string[] }) => {
    return await transferService.getTransferFees(amount, currencies);
  }
);

export const createTransfer = createAsyncThunk(
  'transfer/create',
  async (transferRequest: TransferRequest) => {
    return await transferService.createTransferRequest(transferRequest);
  }
);

const transferSlice = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    resetTransfer: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransferFees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTransferFees.fulfilled, (state, action) => {
        state.status = 'idle';
        state.fees = action.payload;
        state.error = null;
      })
      .addCase(fetchTransferFees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch fees';
      })
      .addCase(createTransfer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createTransfer.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentTransfer = action.payload;
        state.error = null;
      })
      .addCase(createTransfer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to create transfer';
      });
  },
});

export const { resetTransfer } = transferSlice.actions;
export default transferSlice.reducer;
