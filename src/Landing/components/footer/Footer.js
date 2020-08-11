import React from 'react'
import Copyright from '../../../shared/Copyright'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center p-12 bg-white'>
      <h2 className='text-xl capitalize'>Footer</h2>
      <p className='text-gray-700 text-md tracking-wide mt-2'>
        Something here to give the footer a purpose!
      </p>
      <div className='mt-2'>
        <Copyright />
      </div>
    </footer>
  )
}

export default Footer
