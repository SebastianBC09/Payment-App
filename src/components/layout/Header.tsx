import { FC } from 'react'
import { Link, useLocation } from 'react-router'
import { useAppSelector } from '../../store/hooks';

const Header:FC = () => {
  const location = useLocation();
  const { customer } = useAppSelector(state => state.customer);

  const showNav = customer !== null;

    return (
    <header className="bg-white w-full">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          MuralPay
        </Link>

        {showNav && (
          <nav className="flex gap-8">
            <Link
              to="/account"
              className={`text-gray-600 hover:text-blue-600 ${
                location.pathname === '/account' ? 'text-blue-600' : ''
              }`}
            >
              Account
            </Link>
            <Link
              to="/transfer"
              className={`text-gray-600 hover:text-blue-600 ${
                location.pathname === '/transfer' ? 'text-blue-600' : ''
              }`}
            >
              Transfer
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header
