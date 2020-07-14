import React, { Fragment, Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import 'typeface-roboto'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { GlobalProvider } from './contexts/globalContext'
import GlobalStyles from './GlobalStyles'
import theme from './theme'
import Pace from './components/Landing/shared/components/Pace'

const LandingPage = lazy(() =>
  import('./components/Landing/logged_out/components/Main')
)
const AdminPage = lazy(() => import('./components/Admin/Main'))

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <GlobalProvider>
          <CssBaseline />
          <GlobalStyles />
          <Pace color={theme.palette.primary.light} />
          <Suspense fallback={<Fragment />}>
            <Switch>
              <Route exact path='/'>
                <LandingPage />
              </Route>
              <Route exact path='/login'>
                <p>Login</p>
              </Route>
              <Route path='/app'>
                <AdminPage />
              </Route>
              <Redirect to='/' />
            </Switch>
          </Suspense>
        </GlobalProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}

export default App
