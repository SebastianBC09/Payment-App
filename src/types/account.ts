import { BaseCustomer } from "./customer";

interface AccountBalance {
  balance: number;
  tokenSymbol: string;
}

export interface Account extends Pick<BaseCustomer, 'createdAt' | 'updatedAt' | 'name'> {
  id: string;
  address: string;
  blockchain: string;
  balance: AccountBalance;
  isApiEnabled: boolean;
  isPending: boolean;
  depositAccount: {
    id: string;
    accountId: string;
    status: string;
    currency: string;
    bankBeneficiaryName: string;
    bankBeneficiaryAddress: string;
    bankName: string;
    bankAddress: string;
    bankRoutingNumber: string;
    bankAccountNumber: string;
    paymentRails: string[];
  };
  customer: BaseCustomer & { accountId: string };
}
