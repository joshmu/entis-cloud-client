import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Camera as CameraIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}))

const Navbar = () => {
  const classes = useStyles()

  const title = 'Entis Cloud'

  return (
    <AppBar position='relative'>
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography variant='h6' color='inherit' noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
