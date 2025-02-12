export const CUSTOMER_STATUSES = [
  'INACTIVE',
  'PENDING',
  'COMPLETE',
  'ERROR',
  'REJECTED'
] as const;

export const CUSTOMER_TYPES = ['BUSINESS', 'INDIVIDUAL'] as const;

export interface BaseCustomer {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  customerType: CustomerType;
  status: CustomerStatus;
}

export type CustomerStatus = typeof CUSTOMER_STATUSES[number];
export type CustomerType = typeof CUSTOMER_TYPES[number];
export type CustomerWithAccount = BaseCustomer & {
  accountId: string;
};

export type CustomerSession = Pick<BaseCustomer, 'id' | 'status'> & {
  accountId: string;
};

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
