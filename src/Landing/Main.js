import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Features from './components/features/Features'
import Footer from './components/footer/Footer'
import WaveBorder from '../shared/WaveBorder'
import RegisterDialog from '../Dialogs/RegisterDialog'
import LoginDialog from '../Dialogs/LoginDialog'
import Banner from './components/banner/Banner'
import { useGlobalContext } from '../contexts/globalContext'
import { Redirect } from 'react-router'

export default function Album() {
  const theme = useTheme()
  const { auth } = useGlobalContext()

  return (
    <>
      {!auth ? (
        <>
          <LoginDialog />
          <RegisterDialog />
          <Navbar />
          <main>
            <Hero />
            <Banner />
            <WaveBorder />
            <Features />
          </main>
          {/* todo: add property for top bottom color */}
          <WaveBorder />
          <Footer />
        </>
      ) : (
        <Redirect to='/app' />
      )}
    </>
  )
}
