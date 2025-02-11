export const AccountSummary = () => {
  return (
    <div className="card space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Account Overview</h2>
        <span className="status-badge bg-green-100 text-green-800">Active</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Current Balance</p>
          <p className="text-2xl font-bold text-gray-900">$0.00 USD</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Wallet Address</p>
          <p className="text-sm font-mono break-all">0x1234...5678</p>
          <button className="text-blue-600 text-sm hover:text-blue-700 mt-1">
            Copy Address
          </button>
        </div>
      </div>
    </div>
  );
};
