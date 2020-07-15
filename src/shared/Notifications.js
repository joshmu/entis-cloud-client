import React from 'react'
import { SnackbarProvider, useSnackbar } from 'notistack'
import { Grow } from '@material-ui/core'

const NotificationProvider = props => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      // @ts-ignore
      TransitionComponent={Grow}
    >
      {props.children}
    </SnackbarProvider>
  )
}

const useNotify = () => {
  const { enqueueSnackbar } = useSnackbar()
  return (message, status, options = {}) =>
    enqueueSnackbar(message, { variant: status || 'default', ...options })
}

export { NotificationProvider, useNotify }
