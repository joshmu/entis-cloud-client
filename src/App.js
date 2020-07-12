import React from 'react'
import './App.css'
import 'typeface-roboto'
import { CssBaseline, Button } from '@material-ui/core'

function App() {
  return (
    <>
      <CssBaseline />
      <div className='App'>
        <Button variant='contained' color='primary'>
          Hello World
        </Button>
      </div>
    </>
  )
}

export default App
