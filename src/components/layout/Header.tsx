import { FC } from 'react'
import { Link } from 'react-router'

const Header:FC = () => {
  return (
    <header className="bg-white w-full">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          MuralPay
        </Link>

        <nav className="flex gap-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Account
          </Link>
          <Link to="/transfer" className="text-gray-600 hover:text-blue-600">
            Transfer
          </Link>
          <Link to="/transactions" className="text-gray-600 hover:text-blue-600">
            Transactions
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header
