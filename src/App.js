import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import 'typeface-roboto'
import { CssBaseline } from '@material-ui/core'
import Layout from './components/Layout'
import { GlobalProvider } from './contexts/globalContext'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <CssBaseline />
        <div className='App'>
          <Layout />
        </div>
      </Router>
    </GlobalProvider>
  )
}

export default App
