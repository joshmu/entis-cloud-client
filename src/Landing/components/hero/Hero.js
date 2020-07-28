import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Container, Typography, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useGlobalContext } from '../../../contexts/globalContext'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}))

const Hero = () => {
  const classes = useStyles()
  const { auth, setOpenLoginDialog, setOpenRegisterDialog } = useGlobalContext()

  const title = 'Entis Cloud'
  const description =
    'Connecting you to what matters most, cloud infrastructure at your finger tips.'

  const handleClickPrimary = e => {
    setOpenLoginDialog(true)
  }

  const handleClickRegister = e => {
    setOpenRegisterDialog(true)
  }

  return (
    <div className={classes.heroContent}>
      <Container maxWidth='sm'>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='textPrimary'
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>
          {description}
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify='center'>
            <Grid item>
              {auth ? (
                <Button
                  variant='contained'
                  color='primary'
                  component={RouterLink}
                  to='/app'
                >
                  View Dashboard
                </Button>
              ) : (
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleClickPrimary}
                >
                  View Dashboard
                </Button>
              )}
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                color='secondary'
                onClick={handleClickRegister}
              >
                Register
              </Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' color='primary'>
                Contact Us
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default Hero
