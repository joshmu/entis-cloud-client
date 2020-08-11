import React from 'react'

const Copyright = () => {
  return (
    <p className='text-md text-gray-600 center'>
      Copyright © <a href='https://irisi.com.au/'>IRISI</a>{' '}
      {new Date().getFullYear()}.
    </p>
  )
}

export default Copyright
