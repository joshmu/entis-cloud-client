import React, { useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles, Container, Grid, Paper } from '@material-ui/core'
import Chart from './Chart'
import Bar from './Bar'
import Deposits from './Deposits'
import Orders from './Orders'
import Tanks from '../Tanks/Tanks'

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
    height: 270,
  },
}))

export default function Dashboard() {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const { setPageTitle } = useGlobalContext()
  useEffect(() => {
    setPageTitle('Dashboard')
  }, [setPageTitle])

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Bar />
          </Paper>
        </Grid>

        {/* Recent Deposits */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Deposits />
          </Paper>
        </Grid>

        {/* Tanks */}
        <Tanks />

        {/* Chart */}
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <Chart />
          </Paper>
        </Grid>

        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
