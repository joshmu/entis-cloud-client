import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { createBreakpoint } from 'react-use'
import {
  AiOutlineCloudServer as LogoSVG,
  AiOutlineArrowLeft as ArrowIcon,
} from 'react-icons/ai'
import SideMenu from './SideMenu/SideMenu'
import { useGlobalContext } from '../contexts/globalContext'

const useBreakpoint = createBreakpoint()

export default function Layout({ children }) {
  const [open, setOpen] = useState(true)
  const { pageTitle, setAuth, db } = useGlobalContext()

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
    <div className='flex w-full min-h-screen bg-white'>
      {/* left */}
      <div
        className={`${sideWidth(
          open
        )} bg-white overflow-hidden transition-width duration-300 ease-in-out flex-shrink-0`}
      >
        {/* top */}
        <div
          id='logo'
          className='flex items-center w-56 h-16 pl-4 overflow-hidden text-xl capitalize border-b'
        >
          <LogoSVG className='text-4xl fill-current' />
          <h1 className='ml-4 tracking-tight'>{title}</h1>
        </div>

        {/* menu */}
        <SideMenu />
      </div>

      {/* right */}
      <div className='flex-1 bg-indigo-100'>
        {/* top */}
        <div className='flex items-center justify-between h-16 text-white bg-indigo-700'>
          {/* left */}
          <div
            onClick={() => setOpen(!open)}
            className='flex items-center justify-center ml-4 cursor-pointer'
          >
            <button className='p-2 transition-colors duration-150 ease-in-out border border-transparent rounded-full hover:border-gray-100 focus:outline-none'>
              <ArrowIcon
                className={`text-xl origin-center transform transition-all ease-in duration-300 ${
                  open ? '' : '-rotate-180'
                }`}
              />
            </button>
            <h2 className='ml-4 text-xl italic text-white'>{pageTitle}</h2>
          </div>

          {/* right */}
          <RouterLink to='/'>
            <button onClick={handleLogout} className='mr-4 uppercase'>
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
