import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Features from './components/features/Features'
import Footer from './components/footer/Footer'
import WaveBorder from '../shared/WaveBorder'
import LoginDialog from '../Dialogs/LoginDialog'
import Banner from './components/banner/Banner'

export default function Album() {
  const theme = useTheme()

  return (
    <>
      <LoginDialog />
      <Navbar />
      <main>
        <Hero />
        <Banner />
        <WaveBorder
          upperColor={theme.palette.background.paper}
          lowerColor={theme.palette.background.default}
        />
        <Features />
      </main>

      <WaveBorder
        upperColor={theme.palette.background.default}
        lowerColor={theme.palette.background.paper}
      />

      <Footer />
    </>
  )
}
