import { api } from './api';
import { CreateCustomerRequest, Customer, KycLinkResponse } from '../../types/customer';

export const customerService = {
  createCustomer: async (customerData: CreateCustomerRequest) => {
    const response = await api.post<Customer>('/customers', {
      name: customerData.name,
      organizationType: customerData.organizationType
    });
    return response.data;
  },

  getCustomerStatus: async (customerId: string) => {
    const response = await api.get<Customer>(`/customers/${customerId}`);
    return response.data;
  },

  getKycLink: async (customerId: string) => {
    const response = await api.get<KycLinkResponse>(`/customers/${customerId}/kyc-link`);
    return response.data;
  }
};
