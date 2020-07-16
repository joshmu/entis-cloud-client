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
      fetchDb()
    }
    // if we logout and we did have data
    if (!auth && Object.keys(db).length > 0) {
      notify('Your are logged out.', 'info')
      setDb({})
    }
    // eslint-disable-next-line
  }, [db, auth])

  const fetchDb = () => {
    fetch('https://entis-cloud-server.herokuapp.com/api')
      .then(response => response.json())
      .then(data => {
        notify('Using mock data from the server.', 'warning')
        console.log({ data })
        setDb(data)
      })
      .catch(err => {
        // @ts-ignore
        notify('Using local mock data.', 'warning')
        setDb(mockDb.db)
      })
  }

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
