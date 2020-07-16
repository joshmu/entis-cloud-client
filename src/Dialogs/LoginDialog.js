import React from 'react'
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
  const {
    openLoginDialog: open,
    setOpenLoginDialog: setOpen,
    setAuth,
  } = useGlobalContext()

  // const handleClickOpen = () => {
  //   setOpen(true)
  // }

  const handleClose = () => {
    setOpen(false)
  }

  const handleLogin = () => {
    setOpen(false)
    setAuth(true)
    // todo: how to redirect?
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
        />
        <TextField
          margin='dense'
          id='password'
          label='Password'
          type='password'
          fullWidth
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
