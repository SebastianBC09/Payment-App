export interface AccountBalance {
  balance: number;
  tokenSymbol: string;
}

export interface Account {
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
