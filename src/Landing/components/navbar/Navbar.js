import React from 'react'
import { AiOutlineCloudServer as LogoSVG } from 'react-icons/ai'
import { useGlobalContext } from '../../../contexts/globalContext'

const Navbar = () => {
  const { setOpenLoginDialog, setOpenRegisterDialog } = useGlobalContext()

  const title = 'Entis Cloud'

  const handleLogin = () => {
    setOpenLoginDialog(true)
  }
  const handleRegister = () => {
    setOpenRegisterDialog(true)
  }

  return (
    <div className='bg-indigo-700 flex justify-between items-center text-white px-4 md:px-6 shadow-md'>
      <div id='logo' className='text-xl capitalize flex items-center py-4'>
        <LogoSVG className='fill-current text-4xl' />
        <h1 className='ml-2'>{title}</h1>
      </div>
      <div id='menu'>
        <ul className='flex'>
          <li>
            <button
              className='hover:text-gray-100 focus:outline-none uppercase font-semibold cursor-pointer px-2 py-1 transition duration-150 ease-in-out'
              onClick={handleLogin}
            >
              Login
            </button>
          </li>
          <li>
            <button
              className='hover:text-gray-100 focus:outline-none uppercase font-semibold cursor-pointer px-2 py-1 transition duration-150 ease-in-out'
              onClick={handleRegister}
            >
              Register
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
