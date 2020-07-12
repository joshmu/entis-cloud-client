import React from 'react'
import { Layout, PageHeader } from 'antd'
import './MainLayout.less'

import Stats from './Stats.js'

const { Header, Content, Footer } = Layout

const MainLayout = () => {
  return (
    <Layout className='site-layout'>
      <Header className='site-layout-background' style={{ padding: 0 }}>
        <PageHeader
          className='site-page-header'
          onBack={() => null}
          title='Entis Cloud'
          subTitle='Tank Level Indicators'
        />
      </Header>
      <Content style={{ margin: '0 16px', padding: '32px 0' }}>
        <Stats />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Entis Cloud ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  )
}

export default MainLayout
