export const TransactionList = () => {
  return (
    <div className="space-y-6">
      <div className="card bg-white">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
              All Transactions
            </button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
              Sent
            </button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
              Received
            </button>
          </div>
          <div className="flex gap-3">
            <select className="input-field w-auto text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-white">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-50 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Transfer to Juan Pérez</p>
                <p className="text-sm text-gray-500">Bancolombia ****1234</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">-1,000,000 COP</p>
              <p className="text-sm text-gray-500">≈ $253.16 USD</p>
              <p className="text-xs text-gray-400">Feb 11, 2024 14:30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
