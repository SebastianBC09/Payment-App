export const TransactionList = () => {
  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Transaction History</h2>
        <select className="input-field w-auto">
          <option value="all">All Transactions</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>
      </div>

      <div className="space-y-4">
        {/* Transaction Item */}
        <div className="p-4 border rounded-lg hover:bg-gray-50">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium text-gray-900">1,000,000 COP</p>
              <p className="text-sm text-gray-500">Bank of Colombia - ****1234</p>
              <p className="text-xs text-gray-400 mt-1">Feb 11, 2024 at 14:30</p>
            </div>
            <span className="status-badge bg-green-100 text-green-800">
              Completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
