import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Provider } from 'react-redux'
import { store } from './store/store'
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
        </Routes>
      </Router>
  </Provider>
  )
}

export default App
