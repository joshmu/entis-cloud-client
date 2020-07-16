import React, { createContext, useState, useEffect, useContext } from 'react'
import { useNotify } from '../shared/Notifications'

import mockDb from '../mockDb.json'

const initialContext = {}

export const globalContext = createContext(initialContext)

export const GlobalProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('')
  const [openLoginDialog, setOpenLoginDialog] = useState(false)
  const [auth, setAuth] = useState(false)
  const [db, setDb] = useState({})
  const notify = useNotify()

  useEffect(() => {
    // logged in and haven't fetched data yet
    if (auth && Object.keys(db).length === 0) {
      notify('Your are logged in.', 'success')
      fetch('http://localhost:3333/db')
        .then(response => response.json())
        .then(data => setDb(data.db))
        .catch(err => {
          // rather than showing error lets now switch to local mock db
          console.log('using local mock db')
          // @ts-ignore
          notify('Using mock db data.', 'warning')
          setTimeout(() => {
            setDb(mockDb.db)
          }, 2000)
        })
    }
    // if we logout and we did have data
    if (!auth && Object.keys(db).length > 0) {
      notify('Your are logged out.', 'info')
      setDb({})
    }
    // eslint-disable-next-line
  }, [db, auth])

  return (
    <globalContext.Provider
      value={{
        pageTitle,
        setPageTitle,
        db,
        setDb,
        auth,
        setAuth,
        openLoginDialog,
        setOpenLoginDialog,
      }}
    >
      {children}
    </globalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(globalContext)
}
