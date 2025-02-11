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
  status: CustomerStatus;
}
interface BaseCustomer {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  status: CustomerStatus;
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
