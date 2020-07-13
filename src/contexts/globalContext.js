import React, { createContext, useState, useContext } from 'react'

const initialContext = {}

export const globalContext = createContext(initialContext)

export const GlobalProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('Hello World')
  return (
    <globalContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </globalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(globalContext)
}
