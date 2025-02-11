export const CUSTOMER_TYPES = ['BUSINESS', 'INDIVIDUAL'] as const;
export type CustomerType = typeof CUSTOMER_TYPES[number];

export const CUSTOMER_STATUSES = [
  'INACTIVE',
  'PENDING',
  'COMPLETE',
  'ERROR',
  'REJECTED'
] as const;
export type CustomerStatus = typeof CUSTOMER_STATUSES[number];
export interface CustomerSession {
  customerId: string;
  accountId: string;
  status: CustomerStatus;
}
export interface AccountBalance {
  balance: number;
  tokenSymbol: string;
}
export interface CustomerAccount {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  address: string;
  blockchain: string;
  balance: AccountBalance;
  isApiEnabled: boolean;
  isPending: boolean;
}
interface BaseCustomer {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  status: CustomerStatus;
  accountId: string;
  account: CustomerAccount;
}

interface BusinessCustomer extends BaseCustomer {
  customerType: 'BUSINESS';
  businessTaxId?: string;
}

interface IndividualCustomer extends BaseCustomer {
  customerType: 'INDIVIDUAL';
  personalId?: string;
}

export type Customer = BusinessCustomer | IndividualCustomer;

export type CreateCustomerRequest = {
  name: string;
  organizationType: CustomerType;
} & (
  | { organizationType: 'BUSINESS'; businessTaxId?: string }
  | { organizationType: 'INDIVIDUAL'; personalId?: string }
);

export type KycLinkResponse = Readonly<{
  kycLink: string;
}>;
