import React from 'react'
import honeywellImg from './assets/honeywell.png'

const Banner = () => {
  return (
    <div className='flex justify-center items-center bg-white py-4'>
      <div className='w-1/2 md:w-1/3'>
        <img
          src={honeywellImg}
          alt='honeywell company logo banner'
          height='100%'
          width='100%'
        />
      </div>
    </div>
  )
}

export default Banner
