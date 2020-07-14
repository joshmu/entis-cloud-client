import React from 'react'
import {
  Switch,
  Route,
  Link as RouterLink,
  useRouteMatch,
} from 'react-router-dom'
import clsx from 'clsx'
import {
  makeStyles,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Badge,
  Link,
  Container,
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Notifications as NotificationsIcon,
} from '@material-ui/icons'

import { useGlobalContext } from '../contexts/globalContext'

import SideMenu from './SideMenu/SideMenu'
import Dashboard from './Dashboard/Dashboard'
import DetailsDash from './DetailsDash/DetailsDash'
import Contact from './Contact/Contact'
import NotFound from './NotFound/NotFound'

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://irisi.com.au/'>
        IRISI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  logo: {
    maxWidth: 160,
    flexGrow: 1,
    textDecoration: 'none',
    textAlign: 'center',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

export default function Layout() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const { pageTitle } = useGlobalContext()
  const { path } = useRouteMatch()

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <AppBar
        position='absolute'
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component='h1'
            variant='h6'
            color='inherit'
            noWrap
            className={classes.title}
          >
            {pageTitle}
          </Typography>
          <IconButton color='inherit'>
            <Badge badgeContent={4} color='secondary'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          {/* <img
            src='https://unsplash.it/160/40'
            alt='logo'
            className={classes.logo}
          /> */}
          <Typography
            component={RouterLink}
            to='/'
            variant='h6'
            color='inherit'
            noWrap
            className={classes.logo}
          >
            Entis Cloud
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />

        {/* Side Menu */}
        <SideMenu />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        {/* Main Content */}
        <Switch>
          <Route path={`${path}`} component={Dashboard} exact />
          <Route path={`${path}/dashboard`} component={Dashboard} />
          <Route path={`${path}/details`} component={DetailsDash} />
          <Route path={`${path}/contact`} component={Contact} />
          <Route component={NotFound} />
        </Switch>

        <Container maxWidth='lg' className={classes.container}>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  )
}
