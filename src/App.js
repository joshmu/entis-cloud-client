import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import './App.css'
import 'typeface-roboto'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import Main from './components/Main'
import { GlobalProvider } from './contexts/globalContext'
import customTheme from './styles/customTheme'

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={customTheme}>
        <Router>
          <CssBaseline />
          <div className='App'>
            <Switch>
              <Route exact path='/'>
                <p>Welcome</p>
              </Route>
              <Route exact path='/login'>
                <p>Login</p>
              </Route>
              <Route path='/app' component={Main} />
              <Redirect to='/' />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </GlobalProvider>
  )
}

export default App
