import React, { useState, useEffect } from 'react'
import { useRouteMatch, Link as RouterLink } from 'react-router-dom'
import { createBreakpoint } from 'react-use'
import { AiOutlineCloudServer as LogoSVG } from 'react-icons/ai'
import SideMenu from './SideMenu/SideMenu'
import { useGlobalContext } from '../contexts/globalContext'

const useBreakpoint = createBreakpoint()

export default function Layout({ children }) {
  const [open, setOpen] = useState(true)
  const { pageTitle, auth, setAuth, db } = useGlobalContext()
  const { path } = useRouteMatch()

  // detect screen size and toggle side menu
  const breakpoint = useBreakpoint()
  useEffect(() => {
    // 'laptopL', 'laptop', 'tablet'
    setOpen(['laptopL', 'laptop'].some(size => size === breakpoint))
  }, [breakpoint])

  const title = 'Entis Cloud'

  const sideWidth = open => (open ? 'w-56' : 'w-16')

  const handleLogout = () => {
    setAuth(false)
  }

  return (
    <div className='flex w-full bg-white'>
      {/* left */}
      <div
        className={`${sideWidth(
          open
        )} bg-white overflow-hidden transition-width duration-300 ease-in-out`}
      >
        {/* top */}
        <div
          id='logo'
          className='flex items-center h-16 pl-4 w-56 text-xl capitalize border-b overflow-hidden'
        >
          <LogoSVG className='text-4xl fill-current' />
          <h1 className='ml-4'>{title}</h1>
        </div>

        {/* menu */}
        <SideMenu />
      </div>

      {/* right */}
      <div className='flex-1 bg-indigo-100'>
        {/* top */}
        <div
          onClick={() => setOpen(!open)}
          className='flex items-center justify-between h-16 text-white bg-indigo-700'
        >
          {/* left */}
          <h2 className='ml-4 text-white text-xl'>{pageTitle}</h2>

          {/* right */}
          <RouterLink to='/'>
            <button onClick={handleLogout} className='uppercase mr-4'>
              Logout {db?.user?.email}
            </button>
          </RouterLink>
        </div>

        {/* body */}
        {children}
      </div>
    </div>
  )
}
