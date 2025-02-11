export interface TransferFee {
  transactionFee: number;
  fiatCurrencyCode: string;
  estimatedFiatAmount: number;
  exchangeRate: number;
  exchangeFeePercentage: number;
  minTransactionValue: number;
}

export interface PhysicalAddress {
  address1: string;
  address2?: string;
  country: string;
  state: string;
  city: string;
  zip: string;
}

export interface BankContactDetails {
  bankName: string;
  bankAccountOwnerName: string;
  currencyCode: string;
  accountType: 'SAVINGS' | 'CHECKING';
  bankAccountNumber: string;
  bankRoutingNumber: string;
  bankCode: string;
  documentNumber: string;
  documentType: string;
  physicalAddress: PhysicalAddress;
}

export interface RecipientInfo {
  name: string;
  currencyCode: string;
  tokenAmount: number;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  bankContactDetails: BankContactDetails;
}

export interface TransferRequest {
  payoutAccountId: string;
  memo?: string;
  recipientsInfo: RecipientInfo[];
}

export interface TransferRequestResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  payoutAccountId: string;
  memo?: string;
  status: string;
  recipientsInfo: {
    id: string;
    currencyCode: string;
    tokenAmount: number;
    createdAt: string;
    updatedAt: string;
    withdrawalRequestStatus: string;
  }[];
}
