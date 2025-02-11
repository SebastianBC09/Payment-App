export const TransferForm = () => {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">New Transfer</h2>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount (COP)
          </label>
          <input
            type="number"
            className="input-field"
            placeholder="Enter amount in COP"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-md font-medium text-gray-900">Recipient Details</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bank Name
            </label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter bank name"
            />
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Type
            </label>
            <select className="input-field">
              <option value="savings">Savings</option>
              <option value="checking">Checking</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn-primary w-full">
          Create Transfer Request
        </button>
      </form>
    </div>
  );
};
