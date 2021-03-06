import React, { useEffect } from 'react'
import clsx from 'clsx'
import { Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Today from '../Stats/Today'
import Levels from '../Stats/Levels'
import Summary from '../Stats/Summary'
import Tanks from '../Stats/Tanks/Tanks'

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
  fixedHeight: {
    // match height of tank cards
    height: 270,
  },
}))

export default function Dashboard() {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const { setPageTitle } = useGlobalContext()
  useEffect(() => {
    setPageTitle('Dashboard Overview')
  }, [setPageTitle])

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Grid container spacing={3}>
        {/* Levels */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Levels />
          </Paper>
        </Grid>

        {/* Recent Deposits */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Summary />
          </Paper>
        </Grid>

        {/* Today Line */}
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <Today />
          </Paper>
        </Grid>

        {/* Tanks */}
        <Tanks />
      </Grid>
    </Container>
  )
}
