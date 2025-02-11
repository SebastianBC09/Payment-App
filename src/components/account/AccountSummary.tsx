export const AccountSummary = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 card text-white">
        <div className="flex flex-col">
          <span className="text-sm text-blue-100">Available Balance</span>
          <div className="flex items-baseline mt-1">
            <span className="text-3xl font-bold">$0.00</span>
            <span className="ml-1 text-sm text-blue-100">USD</span>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-blue-300/30">
          <div className="flex items-center justify-between text-sm">
            <span className="text-blue-100">Account Status</span>
            <span className="bg-blue-500/30 py-1 px-3 rounded-full text-white">Active</span>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <button className="card bg-white hover:bg-gray-50 flex items-center p-4 transition-colors">
          <div className="p-3 bg-blue-50 rounded-lg">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="font-medium">New Transfer</h3>
            <p className="text-sm text-gray-500">Send money to Colombia</p>
          </div>
        </button>
        <button className="card bg-white hover:bg-gray-50 flex items-center p-4 transition-colors">
          <div className="p-3 bg-blue-50 rounded-lg">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="font-medium">Add Funds</h3>
            <p className="text-sm text-gray-500">Top up your balance</p>
          </div>
        </button>
      </div>
      <div className="card bg-white">
        <h3 className="text-lg font-medium mb-4">Wallet Details</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-500">Wallet Address</span>
              <div className="flex items-center mt-1">
                <span className="font-mono text-sm">0x1234...5678</span>
                <button className="ml-2 p-1 hover:bg-gray-100 rounded">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">Network</span>
              <p className="font-medium">Polygon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
