import React, { useEffect } from 'react'
import {
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core'
import {  makeStyles} from '@material-ui/core/styles'

import { useGlobalContext } from '../../contexts/globalContext'

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

const title = 'Page Not Found'
const message = `The page you are looking for does not exist, please check the url.`

const NotFound = () => {
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

export default NotFound
