export const TransferList = () => {
  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Transfer Requests</h2>
        <div className="flex gap-2">
          <button className="text-sm text-gray-600 hover:text-gray-900">Pending</button>
          <button className="text-sm text-gray-600 hover:text-gray-900">Completed</button>
        </div>
      </div>

      <div className="space-y-4">
        {/* Transfer Item */}
        <div className="p-4 border rounded-lg hover:bg-gray-50">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium text-gray-900">1,000,000 COP</p>
              <p className="text-sm text-gray-500">To: Bank of Colombia - ****1234</p>
            </div>
            <span className="status-badge bg-yellow-100 text-yellow-800">
              Pending
            </span>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="btn-primary py-1 px-4">Execute</button>
            <button className="text-red-600 hover:text-red-700 text-sm">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};
