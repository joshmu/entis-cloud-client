import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Features from './components/features/Features'
import Footer from './components/footer/Footer'
import WaveBorder from '../shared/WaveBorder'
import RegisterModal from '../Modals/RegisterModal'
import LoginModal from '../Modals/LoginModal'
import Banner from './components/banner/Banner'
import { useGlobalContext } from '../contexts/globalContext'
import { Redirect } from 'react-router'

export default function Album() {
  const { auth, login } = useGlobalContext()

  useEffect(() => {
    login()
  }, [])

  return (
    <>
      {!auth ? (
        <>
          <LoginModal />
          <RegisterModal />
          <Navbar />
          <main>
            <Hero />
            <Banner />
            <WaveBorder waveColor='text-gray-100' bgColor='bg-white' />
            <Features />
          </main>
          <WaveBorder waveColor='text-white' bgColor='bg-gray-100' />
          <Footer />
        </>
      ) : (
        <Redirect to='/app' />
      )}
    </>
  )
}
