import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import 'typeface-roboto'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { GlobalProvider } from './contexts/globalContext'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'

import LandingPage from './Landing/Main'
import AdminPage from './Admin/Main'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <Switch>
            <Route exact path='/landing' component={LandingPage} />
            <Route path='/app' component={AdminPage} />
            <Redirect to='/app' />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
