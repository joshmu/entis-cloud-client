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
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {
    login,
    openLoginDialog: open,
    setOpenLoginDialog: setOpen,
  } = useGlobalContext()

  // const handleClickOpen = () => {
  //   setOpen(true)
  // }

  const handleClose = () => {
    setOpen(false)
  }

  const handleLogin = e => {
    e.preventDefault()
    setOpen(false)
    login({ username, password })
  }

  const handleUsernameChange = e => setUsername(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)
  const handleKeypress = e => {
    if (e.charCode === 13) handleLogin(e)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>Login</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Currently for demonstration purposes. No login credentials are
          required to continue, simply click login.
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Email Address'
          type='email'
          fullWidth
          value={username}
          onChange={handleUsernameChange}
          onKeyPress={handleKeypress}
        />
        <TextField
          margin='dense'
          id='password'
          label='Password'
          type='password'
          fullWidth
          value={password}
          onChange={handlePasswordChange}
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
    </Dialog>
  )
}

export default FormDialog
