import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux'
import { store } from './store/store'
import Layout from './components/layout/Layout';
import AccountCreation from './pages/AccountCreation';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<AccountCreation/>} />
          {/* <Route path="/transfer" element={<TransferRequest/>}/> */}
          {/* <Route path="/transactions" element={<Transactions/>}/> */}
        </Route>
      </Routes>
  </Provider>
  )
}

export default App
