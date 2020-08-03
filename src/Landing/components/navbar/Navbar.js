import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { CloudQueue as CloudQueueIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { useGlobalContext } from '../../../contexts/globalContext'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Navbar = () => {
  const classes = useStyles()
  const { setOpenLoginDialog, setOpenRegisterDialog } = useGlobalContext()

  const title = 'Entis Cloud'

  // todo: finish login button for landing appbar
  const handleLogin = () => {
    setOpenLoginDialog(true)
  }
  const handleRegister = () => {
    setOpenRegisterDialog(true)
  }

  return (
    <AppBar position='relative'>
      <Toolbar>
        <CloudQueueIcon className={classes.icon} />
        <Typography
          variant='h6'
          color='inherit'
          noWrap
          className={classes.title}
        >
          {title}
        </Typography>
        <Button color='inherit' onClick={handleLogin}>
          Login
        </Button>
        <Button color='inherit' onClick={handleRegister}>
          Register
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
