import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchAccount, isAccountAddressPending, pollAccountAddress } from "../../store/slices/accountSlice";

export const AccountSummary = () => {
  const dispatch = useAppDispatch();
  const { session } = useAppSelector((state) => state.customer);
  const { account, status } = useAppSelector((state) => state.account);

  useEffect(() => {
    if (session?.accountId) {
      dispatch(fetchAccount(session.customerId));
    }
  }, [dispatch, session]);

  useEffect(() => {
    let intervalId: number;

    if (isAccountAddressPending(account) && session?.accountId) {
      intervalId = window.setInterval(() => {
        dispatch(pollAccountAddress(session.accountId));
      }, 5000);
    }

    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [account, dispatch, session]);

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
      {isAccountAddressPending(account) ? (
        <div className="card bg-white">
          <h3 className="text-lg font-medium mb-4">Wallet Details</h3>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <svg className="animate-spin h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-yellow-800">Generating wallet address...</span>
            </div>
          </div>
        </div>
      ): (
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
      )}
    </div>
  );
};
