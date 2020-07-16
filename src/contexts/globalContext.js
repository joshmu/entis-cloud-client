import React, { createContext, useState, useEffect, useContext } from 'react'
import { useNotify } from '../shared/Notifications'
import { useLocalStorage } from 'react-use'

import mockDb from '../mockDb.json'

const initialContext = {}

export const globalContext = createContext(initialContext)

export const GlobalProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('')
  const [openLoginDialog, setOpenLoginDialog] = useState(false)
  const [auth, setAuth] = useState(false)
  const [db, setDb] = useState({})
  const notify = useNotify()
  const [token, setToken, removeToken] = useLocalStorage('token')

  useEffect(() => {
    // logged in and haven't fetched data yet
    if (auth && Object.keys(db).length === 0) {
      ;(async () => {
        await register({
          username: 'test@test.com',
          password: 'test',
        })
        notify('Your are logged in.', 'success')
        fetchDb(token)
      })()
    }
    // if we logout and we did have data
    if (!auth && Object.keys(db).length > 0) {
      notify('Your are logged out.', 'info')
      setDb({})
    }
    // eslint-disable-next-line
  }, [db, auth])

  // todo: on mount checkToken expiration and remove if expired
  // todo: listen for existence of token to decide on auth
  // todo: login should just get token as success
  // todo: need login route

  const register = async ({ username, password }) => {
    // fetch('http://localhost:3333/api/register', {
    try {
      const response = await fetch(
        'https://entis-cloud-server.herokuapp.com/api/register',
        {
          method: 'POST',
          body: JSON.stringify({ username, password }),
        }
      )
      const token = await response.json()
      console.log('new token!', { token })
      setToken(token)
    } catch (error) {
      console.error(error)
      notify('username invalid', 'error')
    }
  }

  const fetchDb = token => {
    console.log('sending', token)
    // fetch('http://localhost:3333/api', {
    fetch('https://entis-cloud-server.herokuapp.com/api', {
      headers: {
        authorization: 'Bearer ' + token,
      },
    })
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
