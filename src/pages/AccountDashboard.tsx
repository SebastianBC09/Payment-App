import { AccountSummary } from '../components/account/AccountSummary';

const AccountDashboard = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Account Dashboard</h1>
      <AccountSummary />
    </div>
  );
};

export default AccountDashboard;
