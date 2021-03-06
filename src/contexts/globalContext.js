import React, { createContext, useState, useEffect, useContext } from 'react'
import { useNotify } from '../shared/Notifications'
import useLocalStorage from '../hooks/useLocalStorage'

import mockDb from '../mockDb.json'

const initialContext = {}

export const globalContext = createContext(initialContext)

export const GlobalProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('')
  const [openLoginDialog, setOpenLoginDialog] = useState(false)
  const [openRegisterDialog, setOpenRegisterDialog] = useState(false)
  const [auth, setAuth] = useState(false)
  const [db, setDb] = useState({})
  const notify = useNotify()
  // eslint-disable-next-line
  const [token, setToken] = useLocalStorage('token')

  useEffect(() => {
    // logged in and haven't fetched data yet
    if (auth && Object.keys(db).length === 0 && token) {
      console.log('fetching with state token')
      fetchDb(token)
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
  // todo: add today data to local db

  const login = async userInfo => {
    console.log('login', { userInfo })

    // todo: remove once we are in production
    const autoLogin = true
    if (autoLogin) {
      if (!userInfo.email) userInfo.email = 'test@test.com'
      if (!userInfo.password) userInfo.password = 'test'
    }

    return fetch('http://localhost:3333/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          data.errors.forEach(error => notify(error.msg, 'error'))
          throw Error('invalid input')
        }
        if (data.token) {
          console.log('new token!', data.token)
          setToken(data.token)
          console.log('setting auth to true')
          setAuth(true)
          notify('Your are logged in.', 'success')
        }
      })
      .catch(error => {
        console.error(error)
        notify(error.message, 'error')
      })
  }

  const register = userInfo => {
    console.log('context:', { userInfo })
    fetch('http://localhost:3333/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          data.errors.forEach(error => notify(error.msg, 'error'))
          throw Error('invalid input')
        }
        if (data.token) {
          console.log('new token!', data.token)
          setToken(data.token)
          console.log('setting auth to true')
          setAuth(true)
          notify('Your are logged in.', 'success')
        }
      })
      .catch(error => {
        console.error(error)
        notify(error.message, 'error')
      })
  }

  const fetchDb = token => {
    console.log('sending', token)
    fetch('http://localhost:3333/api', {
      // fetch('https://entis-cloud-server.herokuapp.com/api', {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(data => {
        notify('Using partial mock data from the server.', 'warning')
        console.log({ data })
        setDb(data)
      })
      .catch(err => {
        // @ts-ignore
        notify('Using local mock data.', 'warning')
        setDb(mockDb.db)
      })
  }

  const updateUserAssets = ({ user, assetIds }) => {
    fetch('http://localhost:3333/api/userassets/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify({ userId: user.id, assetIds }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('updated', data)
        notify(
          `${user.email} updated with ${assetIds.length} assets.`,
          'success'
        )
      })
      .then(() => {
        // update db by fetching again
        fetchDb(token)
      })
      .catch(err => {
        notify(err.message, 'error')
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
        login,
        register,
        openLoginDialog,
        setOpenLoginDialog,
        openRegisterDialog,
        setOpenRegisterDialog,
        updateUserAssets,
      }}
    >
      {children}
    </globalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(globalContext)
}
