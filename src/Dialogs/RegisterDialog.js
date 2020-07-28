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
    firstName: '',
    lastName: '',
    company: '',
    username: '',
    email: '',
    password: '',
  })

  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const {
    register,
    openRegisterDialog: open,
    setOpenRegisterDialog: setOpen,
  } = useGlobalContext()

  const handleClose = () => {
    setOpen(false)
  }

  const handleRegister = e => {
    e.preventDefault()
    setOpen(false)
    register(user)
  }

  const handleChange = e => {
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  // const handleUsernameChange = e => setUsername(e.target.value)
  // const handlePasswordChange = e => setPassword(e.target.value)
  const handleKeypress = e => {
    if (e.charCode === 13) handleRegister(e)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>Register Account</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Registration for dashboard, initially provided 'Guest' privledges with
          mock data. This can be upgraded to 'Client' with your Entis assets
          associated to your account.
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='firstName'
          label='First Name'
          type='text'
          fullWidth
          value={user.firstName}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin='dense'
          id='lastName'
          label='Last Name'
          type='text'
          fullWidth
          value={user.lastName}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin='dense'
          id='company'
          label='Company'
          type='text'
          fullWidth
          value={user.company}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin='dense'
          id='username'
          label='Username'
          type='text'
          fullWidth
          value={user.username}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin='dense'
          id='email'
          label='Email Address'
          type='email'
          fullWidth
          value={user.email}
          onChange={handleChange}
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
          onClick={handleRegister}
          color='primary'
          component={RouterLink}
          to='/app'
        >
          Register
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog
