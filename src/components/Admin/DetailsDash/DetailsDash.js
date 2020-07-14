import React, { useEffect } from 'react'
import { makeStyles, Container, Grid, Paper } from '@material-ui/core'
import Details from '../Stats/Details'

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
  fixedHeight: {
    // match height of tank cards
    height: 270,
  },
}))

export default function Dashboard() {
  const classes = useStyles()
  const { setPageTitle } = useGlobalContext()
  useEffect(() => {
    setPageTitle('Details')
  }, [setPageTitle])

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Grid container spacing={3}>
        {/* Details */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Details />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
