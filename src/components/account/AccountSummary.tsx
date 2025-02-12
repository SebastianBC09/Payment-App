import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchAccount } from "../../store/slices/accountSlice";

export const AccountSummary = () => {
  const dispatch = useAppDispatch();
  const { account, status } = useAppSelector((state) => state.account);

  useEffect(() => {
    const accountInfo = localStorage.getItem('accountInfo');
    if (accountInfo) {
      const { accountId } = JSON.parse(accountInfo);
      dispatch(fetchAccount(accountId));
    }
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <div className="space-y-6">
        {/* Loading Skeleton */}
        <div className="flex items-center justify-between animate-pulse">
          <div>
            <div className="h-8 w-48 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-32 bg-gray-200 rounded" />
          </div>
          <div className="h-6 w-24 bg-gray-200 rounded" />
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-400 card text-white animate-pulse">
          <div className="h-20" />
        </div>

        <div className="grid md:grid-cols-2 gap-4 animate-pulse">
          <div className="card bg-gray-100 h-24" />
          <div className="card bg-gray-100 h-24" />
        </div>

        <div className="card bg-white animate-pulse">
          <div className="h-6 w-32 bg-gray-200 rounded mb-4" />
          <div className="space-y-4">
            <div className="h-24 bg-gray-100 rounded" />
            <div className="h-24 bg-gray-100 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="card bg-red-50 text-red-700">
        <div className="flex items-center space-x-3">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="font-medium">Error Loading Account</h3>
            <p className="text-sm mt-1">Please refresh the page to try again.</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="ml-auto bg-red-100 hover:bg-red-200 px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{account?.customer.name}</h1>
          <p className="text-sm text-gray-500">Account created on {new Date(account?.createdAt ?? '').toLocaleDateString()}</p>
        </div>
        <span className={`status-badge ${
          account?.customer.status === 'COMPLETE' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {account?.customer.status}
        </span>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-400 card text-white">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-sm text-blue-100">Available Balance</span>
            <div className="flex items-baseline mt-1">
              <span className="text-3xl font-bold">
                ${account?.balance.balance.toFixed(2)}
              </span>
              <span className="ml-1 text-sm text-blue-100">
                {account?.balance.tokenSymbol}
              </span>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/30 transition-colors rounded-lg px-4 py-2 text-sm">
            Add Funds
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="card bg-white hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="flex items-center">
            <div className="p-3 bg-blue-50 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="font-medium">New Transfer</h3>
              <p className="text-sm text-gray-500">Send money to Colombia</p>
            </div>
          </div>
        </div>

        <div className="card bg-white hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="flex items-center">
            <div className="p-3 bg-blue-50 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="font-medium">Transaction History</h3>
              <p className="text-sm text-gray-500">View all your transfers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-white">
        <h3 className="text-lg font-medium mb-4">Wallet Details</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-500">Wallet Address</span>
                <div className="flex items-center mt-1">
                  <span className="font-mono text-sm">{account?.address}</span>
                  <button
                    onClick={() => navigator.clipboard.writeText(account?.address ?? '')}
                    className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors"
                  >
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">Network</span>
                <p className="font-medium">{account?.blockchain}</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm text-blue-800">To add funds, send USDC to this address on the Polygon network.</p>
                <p className="text-xs text-blue-600 mt-1">Make sure to use the correct network to avoid losing your funds.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
