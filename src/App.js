import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import 'typeface-roboto'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { GlobalProvider } from './contexts/globalContext'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'

import LandingPage from './Landing/Main'
import AdminPage from './Admin/Main'

// todo: need to specifiy home route and be able to traverse via link clicks (hard url doesn't work in netlify?)

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <Switch>
            <Route path='/landing' component={LandingPage} />
            <Route path='/app' component={AdminPage} />
            <Redirect to='/app' />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
