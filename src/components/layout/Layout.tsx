import { FC } from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

const Layout:FC = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Header/>
      <main className='container mx-auto px-4 py-8'>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout
