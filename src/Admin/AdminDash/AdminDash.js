import React, { useEffect, useState } from 'react'
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
  const [selectedUser, setSelectedUser] = useState('test1@test.com')
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

  // on component load download a fresh version of the database

  const handleDropdown = e => {
    console.log('dropdown change.', e.target.value)
    setSelectedUser(e.target.value)
  }

  const handleUpdate = () => {
    console.log(
      `updating data for ${selectedUser}, adding assets: ${selectedAssets}`
    )
    const selectedUserId = users.find(user => user.username === selectedUser).id
    updateUserAssets({ userId: selectedUserId, assetIds: selectedAssets })
  }

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container direction='column' spacing={1}>
              <Grid item>
                <Typography variant='h4'>Assign User Assets</Typography>
              </Grid>
              <Grid item>
                <Typography>
                  Currently setting asset priveledges for user:{' '}
                  <Typography color='primary'>
                    <Box fontWeight={500}>{selectedUser}</Box>
                  </Typography>
                </Typography>
              </Grid>
              <Grid container spacing={3} item alignItems='center'>
                <Grid item>
                  {/* user dropdown */}
                  <FormControl>
                    <InputLabel htmlFor='username'>Username</InputLabel>
                    <Select
                      native
                      value={selectedUser}
                      onChange={handleDropdown}
                      inputProps={{
                        name: 'username',
                        id: 'username',
                      }}
                    >
                      {/* <option aria-label='None' value='' /> */}
                      {users
                        .filter(
                          user =>
                            user.role !== 'admin' && user.role !== 'engineer'
                        )
                        .map(user => (
                          <option key={user.username} value={user.username}>
                            {user.username}
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
    </Container>
  )
}
