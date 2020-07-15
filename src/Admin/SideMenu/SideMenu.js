import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import {
  List,
  ListItem,
  ListItemIcon,
  ListSubheader,
  ListItemText,
  Divider,
} from '@material-ui/core'
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  Layers as LayersIcon,
  Info as InfoIcon,
  Assignment as AssignmentIcon,
  Person as PersonIcon,
} from '@material-ui/icons'
import { useGlobalContext } from '../../contexts/globalContext'
import { useNotify } from '../../shared/Notifications'

const SideMenu = () => {
  const { url } = useRouteMatch()
  const { setAuthorized, setDb } = useGlobalContext()
  const notify = useNotify()

  const logout = e => {
    notify('You are logged out.', 'info')
    // todo: this will be replaced when real auth is put in place
    setDb({})
    setAuthorized(false)
  }

  return (
    <>
      <List>
        <ListItem button component={Link} to={`${url}/dashboard`}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary='Dashboard' />
        </ListItem>

        <ListItem button component={Link} to={`${url}/details`}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary='Details' />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary='Customers' />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary='Integrations' />
        </ListItem>

        <ListItem button component={Link} to={`${url}/contact`}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary='Contact' />
        </ListItem>

        <ListItem button component={Link} to='/' onClick={logout}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary='Logout' />
        </ListItem>
      </List>

      <Divider />
      <List>
        <ListSubheader inset>Reports</ListSubheader>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary='Current month' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary='Last quarter' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary='Year-end' />
        </ListItem>
      </List>
    </>
  )
}

export default SideMenu
