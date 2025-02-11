import { api } from './api';
import { CreateCustomerRequest, Customer, KycLinkResponse } from '../../types/customer';

export const customerService = {
  createCustomer: async (customerData: CreateCustomerRequest) => {
    const response = await api.post<Customer>('/customers', customerData);
    return response.data; // Now returns Customer directly
  },

  getCustomerStatus: async (customerId: string) => {
    const response = await api.get<Customer>(`/customers/${customerId}`);
    return response.data; // Now returns Customer directly
  },

  getKycLink: async (customerId: string) => {
    const response = await api.get<KycLinkResponse>(`/customers/${customerId}/kyc-link`);
    return response.data; // Now returns KycLinkResponse directly
  }
};
