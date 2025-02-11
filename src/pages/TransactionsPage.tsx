import { TransactionList } from '../components/transaction/TransactionList';

const TransactionsPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Transactions</h1>
      <TransactionList />
    </div>
  );
};

export default TransactionsPage;
