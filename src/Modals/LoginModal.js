import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { useGlobalContext } from '../contexts/globalContext'

const LoginModal = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const {
    login,
    openLoginDialog: open,
    setOpenLoginDialog: setOpen,
  } = useGlobalContext()

  const handleClose = () => {
    setOpen(false)
  }

  const handleLogin = e => {
    e.preventDefault()
    setOpen(false)
    login(user)
  }

  const handleChange = e => {
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  const handleKeypress = e => {
    if (e.charCode === 13) handleLogin(e)
  }

  return (
    <div
      className={`${
        open ? 'modal-active' : 'opacity-0 pointer-events-none'
      } modal fixed w-full h-full top-0 left-0 flex items-center justify-center  transition-opacity duration-150 ease-linear`}
    >
      <div className='absolute w-full h-full bg-gray-900 opacity-50 modal-overlay'></div>

      <div className='z-50 w-11/12 p-2 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md'>
        <div
          className='absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer'
          onClick={handleClose}
        >
          <svg
            className='text-white fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 18 18'
          >
            <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
          </svg>
        </div>

        {/* <!-- Add margin if you want to see some of the overlay behind the modal--> */}
        <div className='px-6 py-4 text-left modal-content'>
          {/* <!--Title--> */}
          <div className='flex items-center justify-between pb-3'>
            <p className='text-xl'>Login</p>
            <div className='z-50 cursor-pointer' onClick={handleClose}>
              <svg
                className='text-black fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
              >
                <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
              </svg>
            </div>
          </div>

          {/* <!--Body--> */}
          <p className='mt-2 tracking-wide text-gray-600 text-md'>
            Currently for demonstration purposes. No login credentials are
            required to continue, simply click login.
          </p>
          <div className='mt-8'>
            <div className='leading-loose border-b border-gray-500 text-md'>
              <label className='hidden' htmlFor='email'>
                Email
              </label>
              <input
                value={user.email}
                onChange={handleChange}
                onKeyPress={handleKeypress}
                id='email'
                type='email'
                placeholder='Email Address'
              />
            </div>
            <div className='mt-4 leading-loose border-b border-gray-500 text-md'>
              <label className='hidden' htmlFor='password'>
                Password
              </label>
              <input
                value={user.password}
                onChange={handleChange}
                onKeyPress={handleKeypress}
                id='password'
                type='password'
                placeholder='Password'
              />
            </div>
          </div>

          {/* <!--Footer--> */}
          <div className='flex justify-end pt-2 mt-8'>
            <button
              onClick={handleClose}
              className='px-2 text-red-700 uppercase transition duration-300 ease-in-out rounded focus:outline-none font-md hover:bg-red-100'
            >
              cancel
            </button>
            <RouterLink to='/app'>
              <button
                onClick={handleLogin}
                className='p-2 ml-4 text-indigo-700 uppercase transition duration-300 ease-in-out bg-transparent rounded focus:outline-none hover:bg-indigo-100'
              >
                Login
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
