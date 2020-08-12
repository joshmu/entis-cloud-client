import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import {
  MdDashboard as DashboardIcon,
  MdPeople as PeopleIcon,
  MdLayers as LayersIcon,
  MdInfo as InfoIcon,
  MdPerson as PersonIcon,
} from 'react-icons/md'
import { BsBarChartFill as BarChartIcon } from 'react-icons/bs'

import { useGlobalContext } from '../../contexts/globalContext'

const SideMenu = () => {
  const { url } = useRouteMatch()
  const {
    setAuth,
    db: { user },
  } = useGlobalContext()

  const logout = e => {
    setAuth(false)
  }

  return (
    <ul className='my-2'>
      {/* dashboard */}
      <li className='p-1 pl-4 text-gray-600 hover:bg-gray-100 transition duration-300 ease-in-out'>
        <Link
          to={`${url}/dashboard`}
          className='flex items-center justify-start'
        >
          <div className='p-2 fill-current text-xl'>
            <DashboardIcon />
          </div>
          <p className='ml-5 text-gray-700 text-md'>Dashboard</p>
        </Link>
      </li>

      {/* details */}
      <li className='p-1 pl-4 text-gray-600 hover:bg-gray-100 transition duration-300 ease-in-out'>
        <Link to={`${url}/details`} className='flex items-center justify-start'>
          <div className='p-2 fill-current text-xl'>
            <BarChartIcon />
          </div>
          <p className='ml-5 text-gray-700 text-md'>Details</p>
        </Link>
      </li>

      {/* admin */}
      {user && user.role === 'admin' ? (
        <li className='p-1 pl-4 text-gray-600 hover:bg-gray-100 transition duration-300 ease-in-out'>
          <Link to={`${url}/admin`} className='flex items-center justify-start'>
            <div className='p-2 fill-current text-xl'>
              <PeopleIcon />
            </div>
            <p className='ml-5 text-gray-700 text-md'>Admin</p>
          </Link>
        </li>
      ) : (
        ''
      )}

      {/* integrations */}
      <li className='p-1 pl-4 text-gray-600 hover:bg-gray-100 transition duration-300 ease-in-out'>
        <Link
          to={`${url}/integrations`}
          className='flex items-center justify-start'
        >
          <div className='p-2 fill-current text-xl'>
            <LayersIcon />
          </div>
          <p className='ml-5 text-gray-700 text-md'>Integrations</p>
        </Link>
      </li>

      {/* contact */}
      <li className='p-1 pl-4 text-gray-600 hover:bg-gray-100 transition duration-300 ease-in-out'>
        <Link to={`${url}/contact`} className='flex items-center justify-start'>
          <div className='p-2 fill-current text-xl'>
            <InfoIcon />
          </div>
          <p className='ml-5 text-gray-700 text-md'>Contact</p>
        </Link>
      </li>

      {/* logout */}
      <li
        onClick={logout}
        className='p-1 pl-4 text-gray-600 hover:bg-gray-100 transition duration-300 ease-in-out'
      >
        <Link to='/' className='flex items-center justify-start'>
          <div className='p-2 fill-current text-xl'>
            <PersonIcon />
          </div>
          <p className='ml-5 text-gray-700 text-md'>Logout</p>
        </Link>
      </li>
    </ul>
  )
}

export default SideMenu
