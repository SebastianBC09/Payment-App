import { api } from './api';
import { Account } from '../../types/account';

export const accountService = {
  getAccount: async (accountId: string) => {
    const response = await api.get<Account>(`/accounts/${accountId}`);
    return response.data;
  }
};
