import React from 'react'

const Copyright = () => {
  return (
    <div className='flex justify-center items-center'>
      <p className='text-md text-gray-600 center py-8'>
        Copyright © <a href='https://irisi.com.au/'>IRISI</a>{' '}
        {new Date().getFullYear()}.
      </p>
    </div>
  )
}

export default Copyright
