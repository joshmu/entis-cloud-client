import React from 'react'
import './App.css'
import 'typeface-roboto'
import { CssBaseline } from '@material-ui/core'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <>
      <CssBaseline />
      <div className='App'>
        <Dashboard />
      </div>
    </>
  )
}

export default App
