import { BaseCustomer, CreateCustomerRequest, KycLinkResponse } from "../../types/customer";
import { api } from "./api";

export const customerService = {
  createCustomer: async (customerData: CreateCustomerRequest) => {
    const response = await api.post<BaseCustomer>('/customers', {
      name: customerData.name,
      organizationType: customerData.organizationType
    });
    return response.data;
  },

  getCustomerStatus: async (id: string) => {
    const response = await api.get<BaseCustomer>(`/customers/${id}`);
    return response.data;
  },

  getKycLink: async (id: string) => {
    const response = await api.get<KycLinkResponse>(`/customers/${id}/kyc-link`);
    return response.data;
  }
};
