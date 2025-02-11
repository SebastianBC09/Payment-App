import { Routes, Route, Navigate } from 'react-router';
import { Provider } from 'react-redux'
import { store } from './store/store'
import Layout from './components/layout/Layout';
import AccountDashboard from './pages/AccountDashboard';
import AccountCreation from './pages/AccountCreation';
import TransferPage from './pages/TransferPage';
import TransactionsPage from './pages/TransactionsPage';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<Layout />}>
          {/* Public route */}
          <Route path="/create-account" element={<AccountCreation />} />

          {/* Protected routes */}
          <Route path="/account" element={<AccountDashboard />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />

          {/* Redirects */}
          <Route path="/" element={<Navigate to="/create-account" replace />} />
          <Route path="*" element={<Navigate to="/create-account" replace />} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App
