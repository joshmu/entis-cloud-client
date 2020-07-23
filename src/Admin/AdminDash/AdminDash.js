import React, { useEffect } from 'react'
import { Container, Grid, Paper } from '@material-ui/core'

import AdminTable from './AdminTable'

import { makeStyles } from '@material-ui/core/styles'

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
  const { setPageTitle } = useGlobalContext()
  useEffect(() => {
    setPageTitle('Admin')
  }, [setPageTitle])

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}> */}
          <AdminTable />
          {/* </Paper> */}
        </Grid>
      </Grid>
    </Container>
  )
}
