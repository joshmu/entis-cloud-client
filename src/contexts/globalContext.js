import React, { createContext, useState, useEffect, useContext } from 'react'
import { useNotify } from '../shared/Notifications'

import mockDb from '../mockDb.json'

const initialContext = {}

export const globalContext = createContext(initialContext)

export const GlobalProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('')
  const [authorized, setAuthorized] = useState(false)
  const [db, setDb] = useState({})
  const notify = useNotify()

  useEffect(() => {
    if (authorized && Object.keys(db).length === 0) {
      fetch('http://localhost:3333/db')
        .then(response => response.json())
        .then(data => setDb(data.db))
        .catch(err => {
          // rather than showing error lets now switch to local mock db
          console.log('using local mock db')
          // @ts-ignore
          notify('Using mock db data.', 'warning')
          setDb(mockDb.db)
        })
    }
    // eslint-disable-next-line
  }, [db, authorized])

  return (
    <globalContext.Provider
      value={{ pageTitle, setPageTitle, db, setDb, setAuthorized }}
    >
      {children}
    </globalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(globalContext)
}
