export const TransferForm = () => {
  return (
    <div className="card bg-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">New Transfer</h2>
          <p className="text-sm text-gray-500 mt-1">Send money to Colombian bank accounts</p>
        </div>
        <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
          1 USD ≈ 3,950 COP
        </div>
      </div>
      <form className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="number"
                  className="input-field pl-8"
                  placeholder="0.00"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">USD Amount</p>
            </div>
            <div className="flex-1">
              <div className="relative">
                <input
                  type="number"
                  className="input-field pl-12"
                  placeholder="0.00"
                  disabled
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">COP</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Recipient Gets</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-md font-medium flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Recipient Details
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Holder Name
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="Enter full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Type
              </label>
              <select className="input-field">
                <option value="">Select account type</option>
                <option value="savings">Savings Account</option>
                <option value="checking">Checking Account</option>
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bank Name
              </label>
              <select className="input-field">
                <option value="">Select bank</option>
                <option value="bancolombia">Bancolombia</option>
                <option value="davivienda">Davivienda</option>
                <option value="bbva">BBVA Colombia</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Number
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="Enter account number"
              />
            </div>
          </div>
        </div>
        <div className="pt-4 border-t">
          <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Create Transfer
          </button>
          <p className="text-sm text-gray-500 text-center mt-3">
            By clicking Create Transfer, you agree to our Terms of Service
          </p>
        </div>
      </form>
    </div>
  );
};
