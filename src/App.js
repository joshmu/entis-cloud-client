import React, { useState } from 'react'
import './App.less'
import { Layout } from 'antd'
import MainLayout from './components/MainLayout.js'
import SidebarLayout from './components/SidebarLayout.js'

function App() {
  const [state, setState] = useState({ collapsed: false })

  /** @param {boolean} collapsed */
  const onCollapse = collapsed => {
    console.log(collapsed)
    setState({ collapsed })
  }

  return (
    <div className='App'>
      <Layout style={{ minHeight: '100vh' }}>
        <SidebarLayout collapsed={state.collapsed} onCollapse={onCollapse} />
        <MainLayout />
      </Layout>
    </div>
  )
}

export default App
