import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { customerService } from "../../services/api/customerService"
import { BaseCustomer, CreateCustomerRequest, CustomerSession, CustomerWithAccount } from "../../types/customer"
import { AccountInfo } from "../../types/account";

interface CustomerState {
  customer: BaseCustomer | null;
  kycLink: string | null;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
  session: CustomerSession | null;
  accountInfo: AccountInfo | null;
}

const initialState: CustomerState = {
  customer: null,
  kycLink: null,
  status: 'idle',
  error: null,
  session: null,
  accountInfo: null
}

export const createCustomer = createAsyncThunk(
  'customer/create',
  async (data: CreateCustomerRequest) => {
    const customer = await customerService.createCustomer(data);
    const kycLinkResponse = await customerService.getKycLink(customer.id);
    return {
      customer,
      kycLink: kycLinkResponse.kycLink,
    };
  }
);

export const setCustomerSession = createAsyncThunk(
  'customer/setSession',
  async (customer: CustomerWithAccount) => {
    const session: CustomerSession = {
      id: customer.id,
      status: customer.status
    };

    const accountInfo: AccountInfo = {
      accountId: customer.accountId
    };
    localStorage.setItem('customerSession', JSON.stringify(session));
    localStorage.setItem('accountInfo', JSON.stringify(accountInfo));
    return {
      session,
      accountInfo
    };
  }
);

export const checkCustomerStatus = createAsyncThunk(
  'customer/checkStatus',
  async (id: string) => {
    const customer = await customerService.getCustomerStatus(id);
    return customer as CustomerWithAccount;
  }
);

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    resetCustomer: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCustomer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.status = 'idle';
        state.customer = action.payload.customer;
        state.kycLink = action.payload.kycLink;
        state.error = null;
      })
      .addCase(createCustomer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to create customer';
      })
      .addCase(checkCustomerStatus.fulfilled, (state, action) => {
        if (state.customer) {
          state.customer = action.payload;
        }
      })
      .addCase(setCustomerSession.fulfilled, (state, action) => {
        state.session = action.payload.session;
        state.accountInfo = action.payload.accountInfo;
        state.status = 'idle';
    });
  },
});

export const { resetCustomer } = customerSlice.actions;
export default customerSlice.reducer;
