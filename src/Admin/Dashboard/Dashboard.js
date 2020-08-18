import React, { useEffect } from 'react'
import Today from '../Stats/Today'
import Levels from '../Stats/Levels'
import Summary from '../Stats/Summary'
import Tanks from '../Stats/Tanks/Tanks'

import { useGlobalContext } from '../../contexts/globalContext'

export default function Dashboard() {
  const { setPageTitle } = useGlobalContext()
  useEffect(() => {
    setPageTitle('Dashboard Overview')
  }, [setPageTitle])

  return (
    <div className='grid grid-cols-6 gap-6 mx-8 my-12'>
      <div className='h-dash col-span-6 lg:col-span-4 flex flex-col p-4 bg-white shadow rounded-sm'>
        <Levels />
      </div>
      <div className='h-dash col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col p-4 bg-white shadow rounded-sm'>
        <Summary />
      </div>
      <div className='h-dash col-span-6 flex flex-col p-4 bg-white shadow rounded-sm'>
        <Today />
      </div>
      <Tanks />
    </div>
  )
}
