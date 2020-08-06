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
            <div className='max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl'>
              <div className='ml-6 pt-1'>
                <h1 className='text-2xl text-blue-700 leading-tight'>
                  Tailwind and Create React App!
                </h1>
                <p className='text-base text-gray-700 leading-normal'>
                  Building apps together
                </p>
              </div>
            </div>
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
      ) : (
        <Redirect to='/app' />
      )}
    </>
  )
}
