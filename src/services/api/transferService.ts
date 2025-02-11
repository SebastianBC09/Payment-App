
import { api } from './api';
import { TransferFee, TransferRequest, TransferRequestResponse } from '../../types/transfer';

export const transferService = {
  getTransferFees: async (tokenAmount: number, fiatCurrencyCodes: string[]) => {
    const response = await api.get<TransferFee[]>('/transfer-fees', {
      params: {
        tokenAmount,
        fiatCurrencyCodes: fiatCurrencyCodes.join(',')
      }
    });
    return response.data;
  },

  createTransferRequest: async (transferRequest: TransferRequest) => {
    const response = await api.post<TransferRequestResponse>('/transfer-requests', transferRequest);
    return response.data;
  }
};
