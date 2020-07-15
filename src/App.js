import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import 'typeface-roboto'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { GlobalProvider } from './contexts/globalContext'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'
import { NotificationProvider } from './shared/Notifications'

import LandingPage from './Landing/Main'
import AdminPage from './Admin/Main'

function App() {
  return (
    <NotificationProvider>
      <GlobalProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/app' component={AdminPage} />
              <Redirect to='/' />
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </GlobalProvider>
    </NotificationProvider>
  )
}

export default App
