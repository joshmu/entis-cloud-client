import React from 'react'
import { useGlobalContext } from '../../../contexts/globalContext'

const Hero = () => {
  const { setOpenLoginDialog, setOpenRegisterDialog } = useGlobalContext()

  const title = 'Entis Cloud'
  const description =
    'Connecting you to what matters most, cloud infrastructure at your finger tips.'

  const handleClickPrimary = e => {
    setOpenLoginDialog(true)
  }

  const handleClickRegister = e => {
    setOpenRegisterDialog(true)
  }

  return (
    <div
      id='hero'
      className='py-12 flex flex-col items-center justify-center bg-white'
    >
      <div className='max-w-lg text-center'>
        <h1 className='text-6xl font-thin text-gray-900'>{title}</h1>
        <p className='mt-4 text-xl text-center text-gray-600'>{description}</p>
        <ul className='flex flex-row items-center justify-center mt-8'>
          <li>
            <button
              onClick={handleClickPrimary}
              className='px-3 hover:shadow-md py-2 mx-2 font-bold text-white uppercase hover:bg-indigo-900 bg-indigo-800 rounded shadow-sm focus:outline-none transition duration-150 ease-in-out'
            >
              login
            </button>
          </li>
          <li>
            <button
              onClick={handleClickRegister}
              className='px-3 hover:shadow-md py-2 mx-2 font-bold text-white uppercase hover:bg-red-800 bg-red-700 rounded shadow-sm focus:outline-none transition duration-150 ease-in-out'
            >
              register
            </button>
          </li>
          <li>
            <button className='px-3 hover:shadow-md py-2 mx-2 font-bold text-blue-700 hover:bg-blue-100 uppercase border border-blue-700 rounded shadow-sm focus:outline-none transition duration-150 ease-in-out'>
              contact us
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hero
