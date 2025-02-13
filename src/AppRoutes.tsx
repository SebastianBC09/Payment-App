import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';;
import { useAppDispatch } from './store/hooks';
import Layout from './components/layout/Layout';
import AccountCreation from './pages/AccountCreation';
import AccountDashboard from './pages/AccountDashboard';
import TransferPage from './pages/TransferPage';
import TransactionsPage from './pages/TransactionsPage';
import { setCustomerSession } from './store/slices/customerSlice';
import { fetchAccount } from './store/slices/accountSlice';


function AppRoutes() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedSession = localStorage.getItem('customerSession');
    const savedAccountInfo = localStorage.getItem('accountInfo');

    if (savedSession && savedAccountInfo) {
      const parsedSession = JSON.parse(savedSession);
      const parsedAccountInfo = JSON.parse(savedAccountInfo);

      dispatch(setCustomerSession({
        ...parsedSession,
        accountId: parsedAccountInfo.accountId
      }));

      if (parsedAccountInfo.accountId) {
        dispatch(fetchAccount(parsedAccountInfo.accountId));
      }
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/create-account" element={<AccountCreation />} />

          <Route path="/account" element={<AccountDashboard />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />

        <Route path="/" element={<Navigate to="/account" replace />} />
        <Route path="*" element={<Navigate to="/account" replace />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
