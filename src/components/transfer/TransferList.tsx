export const TransferList = () => {
  return (
    <div className="card bg-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Transfers</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full">
            All
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-full">
            Pending
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-full">
            Completed
          </button>
        </div>
      </div>
      <div className="space-y-3">
        <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <p className="font-medium">1,000,000 COP</p>
                <p className="text-sm text-gray-500">To: Juan Pérez</p>
                <p className="text-xs text-gray-400">Bancolombia ****1234</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="status-badge bg-yellow-100 text-yellow-800">
                Pending
              </span>
              <span className="text-xs text-gray-400 mt-1">
                2 min ago
              </span>
            </div>
          </div>
          <div className="mt-4 flex gap-2 justify-end">
            <button className="text-sm text-gray-600 hover:text-gray-900">
              View Details
            </button>
            <button className="btn-primary text-sm py-1 px-4">
              Execute
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
