import React from 'react'

const Features = () => {
  const cards = [1, 2, 3]

  return (
    <div className='flex justify-center items-center flex-wrap'>
      {cards.map(card => (
        <div key={card} className='w-full sm:w-1/2 md:w-64 p-4'>
          <div className='overflow-hidden shadow-md rounded border'>
            <img
              src='https://source.unsplash.com/_Dogn_h7Qek'
              alt='placeholder'
            />
            <div className='p-4'>
              <h2 className='text-2xl'>Heading</h2>
              <p className='mt-2 leading-relaxed text-md'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora reprehenderit totam eum libero natus vero.
              </p>
              <div className='flex justify-start w-1/2 mt-8'>
                <button className='font-bold text-blue-800 uppercase'>
                  view
                </button>
                <button className='ml-8 font-bold text-blue-800 uppercase'>
                  edit
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Features
