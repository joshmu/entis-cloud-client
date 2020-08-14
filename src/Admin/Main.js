import React from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import { Box, Container, LinearProgress } from '@material-ui/core'

import { useGlobalContext } from '../contexts/globalContext'

import Dashboard from './Dashboard/Dashboard'
import DetailsDash from './DetailsDash/DetailsDash'
import AdminDash from './AdminDash/AdminDash'
import Contact from './Contact/Contact'
import NotFound from './NotFound/NotFound'
import Copyright from '../shared/Copyright'
import Layout from './Layout'

const Admin = () => {
  const { auth, db } = useGlobalContext()
  const { path } = useRouteMatch()

  return (
    <>
      {auth ? (
        <Layout>
          <main>
            <div />

            {/* Main Content */}
            {Object.keys(db).length === 0 ? (
              <LinearProgress
                aria-describedby='dashboard data loading'
                aria-busy={true}
              />
            ) : (
              <Switch>
                <Route path={`${path}`} component={Dashboard} exact />
                <Route path={`${path}/dashboard`} component={Dashboard} />
                <Route path={`${path}/details`} component={DetailsDash} />
                <Route path={`${path}/admin`} component={AdminDash} />
                <Route path={`${path}/contact`} component={Contact} />
                <Route component={NotFound} />
              </Switch>
            )}

            <Container maxWidth='lg'>
              <Box pt={4}>
                <Copyright />
              </Box>
            </Container>
          </main>
        </Layout>
      ) : (
        <Redirect to='/' />
      )}
    </>
  )
}

export default Admin
