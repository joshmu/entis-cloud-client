import React, { createContext, useState, useEffect, useContext } from 'react'

import mockDb from '../mockDb.json'

const initialContext = {}

export const globalContext = createContext(initialContext)

export const GlobalProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('Hello World')
  const [db, setDb] = useState([])

  useEffect(() => {
    if (db.length === 0) {
      fetch('http://localhost:3333/db')
        .then(response => response.json())
        .then(data => setDb(data.db))
        .catch(err => {
          // rather than showing error lets now switch to local mock db
          console.log('using local mock db')
          // @ts-ignore
          setDb(mockDb.db)
        })
    }
  }, [db])

  return (
    <globalContext.Provider value={{ pageTitle, setPageTitle, db }}>
      {children}
    </globalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(globalContext)
}
