import { FC } from 'react'
import { Link } from 'react-router'

const Header:FC = () => {
  return (
    <header className='border-b'>
      <nav className='container mx-auto px-4 py-4'>
        <ul className='flex gap-4'>
          <li>
            <Link to="/" className='hover:text-primary'>Account Creation</Link>
          </li>
          <li>
            <Link to="/transfer" className='hover:text-primary'>Transfer Request</Link>
          </li>
          <li>
            <Link to="/transactions" className='hover:text-primary'>Transactions</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
