import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchAccount } from "../../store/slices/accountSlice";

export const AccountSummary = () => {
  const dispatch = useAppDispatch();
  const { account, status } = useAppSelector((state) => state.customer);
  const { session } = useAppSelector((state) => state.customer);

  useEffect(() => {
    if (session?.customerId) {
      dispatch(fetchAccount(session.customerId));
    }
  }, [dispatch, session]);

  const formatBalance = (balance: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(balance);
  };



  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 card text-white">
        <div className="flex flex-col">
          <span className="text-sm text-blue-100">Available Balance</span>
          <div className="flex items-baseline mt-1">
            {status === 'loading' ? (
              <div className="animate-pulse h-8 w-32 bg-blue-300/30 rounded" />
            ) : (
              <>
                <span className="text-3xl font-bold">
                  ${formatBalance(account?.balance.balance ?? 0)}
                </span>
                <span className="ml-1 text-sm text-blue-100">
                  {account?.balance.tokenSymbol}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="card bg-white">
        <h3 className="text-lg font-medium mb-4">Wallet Details</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-500">Wallet Address</span>
              <div className="flex items-center mt-1">
                {status === 'loading' ? (
                  <div className="animate-pulse h-5 w-48 bg-gray-200 rounded" />
                ) : (
                  <>
                    <span className="font-mono text-sm">{account?.address}</span>
                    <button
                      className="ml-2 p-1 hover:bg-gray-100 rounded"
                      onClick={() => navigator.clipboard.writeText(account?.address ?? '')}
                    >
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">Network</span>
              <p className="font-medium">{account?.blockchain ?? 'Polygon'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
