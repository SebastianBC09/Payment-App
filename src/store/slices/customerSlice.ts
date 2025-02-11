import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { customerService } from "../../services/api/customerService"
import { CreateCustomerRequest, Customer, CustomerSession } from "../../types/customer"
import { ApiError } from "../../types/api";

interface CustomerState {
  customer: Customer | null;
  kycLink: string | null;
  status: 'idle' | 'loading' | 'polling' | 'failed';
  error: string | null;
  session: CustomerSession | null;
}

const initialState: CustomerState = {
  customer: null,
  kycLink: null,
  status: 'idle',
  error: null,
  session: null,
}

export const createCustomer = createAsyncThunk<
  { customer: Customer; kycLink: string },
  CreateCustomerRequest,
  { rejectValue: ApiError }>(
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

export const checkCustomerStatus = createAsyncThunk(
  'customer/checkStatus',
  async (customerId: string) => {
    const customer = await customerService.getCustomerStatus(customerId);
    return customer;
  }
);

export const setCustomerSession = createAsyncThunk(
  'customer/setSession',
  async (customer: Customer) => {
    const session = {
      customerId: customer.id,
      accountId: customer.accountId,
      status: customer.status
    };

    localStorage.setItem('customerSession', JSON.stringify(session));
    return session;
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
      });
  },
});


export const { resetCustomer } = customerSlice.actions;
export default customerSlice.reducer;
