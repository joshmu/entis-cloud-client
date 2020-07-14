import React, { useEffect } from 'react'
import {
  makeStyles,
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core'

import { useGlobalContext } from '../../../contexts/globalContext'

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}))

const title = 'Contact Us'
const message = `Growing from an electrical and automation business, we have now assembled an energetic multi-disciplinary team able to bring a holistic approach to plant improvement, optimisation and construction.`

const About = () => {
  const classes = useStyles()

  const { setPageTitle } = useGlobalContext()
  useEffect(() => {
    setPageTitle(title)
  }, [setPageTitle])

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Grid container justify='center'>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Grid container direction='column' spacing={1}>
              <Grid item>
                <Typography variant='h4'>{title}</Typography>
              </Grid>
              <Grid item>
                <Typography>{message}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
