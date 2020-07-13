import React, { createContext, useState, useEffect, useContext } from 'react'

const initialContext = {}

export const globalContext = createContext(initialContext)

export const GlobalProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('Hello World')
  const [db, setDb] = useState([])

  useEffect(() => {
    if (db.length === 0) {
      fetch('https://my-json-server.typicode.com/joshmu/entis-cloud-client')
        .then(response => response.json())
        .then(data => setDb(data))
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
