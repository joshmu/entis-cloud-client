import React from 'react'

function WaveBorder({ waveColor, bgColor }) {
  return (
    <div className={`${bgColor} ${waveColor}`}>
      <p>waveborder</p>
      <svg
        className='fill-current h-20 w-full'
        xmlns='http://www.w3.org/2000/svg'
        xlink='http://www.w3.org/1999/xlink'
        viewBox='0 24 150 28'
        preserveAspectRatio='none'
        shapeRendering='auto'
      >
        <defs>
          <path
            id='waveborder'
            d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
          />
        </defs>
        <g className='waveAnimation'>
          <use href='#waveborder' x='48' y='0' fill='' />
        </g>
      </svg>
    </div>
  )
}

export default WaveBorder
