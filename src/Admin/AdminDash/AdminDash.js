import React, { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  Paper,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Box,
  LinearProgress,
} from '@material-ui/core'

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
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedAssets, setSelectedAssets] = useState([])
  const classes = useStyles()
  const {
    setPageTitle,
    updateUserAssets,
    db: {
      data: { users },
    },
  } = useGlobalContext()

  useEffect(() => {
    setPageTitle('Admin')
  }, [setPageTitle])

  // auto select the first user who is either a guest or client for the dropdown
  useEffect(() => {
    if (selectedUser) return

    const selected = users.filter(
      user => !!user.role.match(/[guest|client]/)
    )[0]
    setSelectedUser(selected)
    // eslint-disable-next-line
  }, [users])

  // on component load download a fresh version of the database

  const handleDropdown = e => {
    const dropdownValue = e.target.value
    console.log('dropdown changed', dropdownValue)
    const selected = users.find(user => user.email === dropdownValue)
    setSelectedUser(selected)
  }

  const handleUpdate = () => {
    console.log(
      `updating data for ${selectedUser}, adding assets: ${selectedAssets}`
    )
    updateUserAssets({ user: selectedUser, assetIds: selectedAssets })
  }

  return (
    <Container maxWidth='lg' className={classes.container}>
      {selectedUser === null ? (
        <LinearProgress
          aria-describedby='dashboard data loading'
          aria-busy={true}
        />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container direction='column' spacing={1}>
                <Grid item>
                  <Typography variant='h4'>Assign User Assets</Typography>
                </Grid>
                <Grid item>
                  <Typography component={'span'}>
                    Currently setting asset priveledges for user:{' '}
                    <Typography component={'span'} color='primary'>
                      <Box fontWeight={500} color='primary'>
                        {selectedUser.email}
                      </Box>
                    </Typography>
                  </Typography>
                </Grid>
                <Grid container spacing={3} item alignItems='center'>
                  <Grid item>
                    {/* user dropdown */}
                    <FormControl>
                      <InputLabel htmlFor='email'>Email</InputLabel>
                      <Select
                        native
                        value={selectedUser?.email || ''}
                        onChange={handleDropdown}
                        inputProps={{
                          name: 'email',
                          id: 'email',
                        }}
                      >
                        {/* <option aria-label='None' value='' /> */}
                        {users
                          .filter(
                            user =>
                              user.role !== 'admin' && user.role !== 'engineer'
                          )
                          .map(user => (
                            <option key={user.email} value={user.email}>
                              {user.email}
                            </option>
                          ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  {/* update button */}
                  <Grid item>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={handleUpdate}
                    >
                      Update
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <AdminTable
              selectedUser={selectedUser}
              setSelectedAssets={setSelectedAssets}
            />
          </Grid>
        </Grid>
      )}
    </Container>
  )
}
