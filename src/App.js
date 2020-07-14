import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import 'typeface-roboto'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import Layout from './components/Layout'
import { GlobalProvider } from './contexts/globalContext'
import customTheme from './styles/customTheme'

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={customTheme}>
        <Router>
          <CssBaseline />
          <div className='App'>
            <Layout />
          </div>
        </Router>
      </ThemeProvider>
    </GlobalProvider>
  )
}

export default App
