import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import { useGlobalContext } from '../contexts/globalContext'

const FormDialog = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const {
    login,
    openLoginDialog: open,
    setOpenLoginDialog: setOpen,
  } = useGlobalContext()

  // const handleClickOpen = () => {
  //   setOpen(true)
  // }

  function toggleModal() {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
  }

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
        !open ? 'modal-active' : 'opacity-0 pointer-events-none'
      } modal fixed w-full h-full top-0 left-0 flex items-center justify-center  transition-opacity duration-150 ease-linear`}
    >
      <div className='absolute w-full h-full bg-gray-900 opacity-50 modal-overlay'></div>

      <div className='p-2 z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md'>
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
          <p className='text-md mt-2 text-gray-600 tracking-wide'>
            Currently for demonstration purposes. No login credentials are
            required to continue, simply click login.
          </p>
          <div className='mt-8'>
            <div className='border-b text-md leading-loose border-gray-500'>
              <label className='hidden' htmlFor='email'>
                Email
              </label>
              <input id='email' type='email' placeholder='Email Address' />
            </div>
            <div className='mt-4 border-b text-md leading-loose border-gray-500'>
              <label className='hidden' htmlFor='password'>
                Password
              </label>
              <input id='password' type='password' placeholder='Password' />
            </div>
          </div>

          {/* <!--Footer--> */}
          <div className='flex justify-end pt-2 mt-8'>
            <button
              onClick={handleClose}
              className=' px-2 uppercase font-md text-red-700 rounded hover:bg-red-100 transition duration-300 ease-in-out'
            >
              cancel
            </button>
            <button
              onClick={handleLogin}
              className=' p-2 ml-4 uppercase text-indigo-700 bg-transparent rounded hover:bg-indigo-100 transition duration-300 ease-in-out'
            >
              Login
            </button>
          </div>

          <DialogTitle id='form-dialog-title'>Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Currently for demonstration purposes. No login credentials are
              required to continue, simply click login.
            </DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='email'
              label='Email Address'
              type='email'
              fullWidth
              value={user.email}
              onChange={handleChange}
              onKeyPress={handleKeypress}
            />
            <TextField
              margin='dense'
              id='password'
              label='Password'
              type='password'
              fullWidth
              value={user.password}
              onChange={handleChange}
              onKeyPress={handleKeypress}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='secondary'>
              Cancel
            </Button>
            <Button
              onClick={handleLogin}
              color='primary'
              component={RouterLink}
              to='/app'
            >
              Login
            </Button>
          </DialogActions>
        </div>
      </div>
    </div>
  )
}

export default FormDialog
