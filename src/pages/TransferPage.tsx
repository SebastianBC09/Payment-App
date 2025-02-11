import { TransferForm } from '../components/transfer/TransferForm';
import { TransferList } from '../components/transfer/TransferList';

const TransferPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Transfers</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <TransferForm />
        <TransferList />
      </div>
    </div>
  );
};

export default TransferPage;
