import React from 'react'
// import { Container, Typography, Grid, Button } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles'
import { useGlobalContext } from '../../../contexts/globalContext'

// const useStyles = makeStyles(theme => ({
//   heroContent: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
// }))

const Hero = () => {
  // const classes = useStyles()
  const { setOpenLoginDialog, setOpenRegisterDialog } = useGlobalContext()

  const title = 'Entis Cloud'
  const description =
    'Connecting you to what matters most, cloud infrastructure at your finger tips.'

  const handleClickPrimary = e => {
    setOpenLoginDialog(true)
  }

  const handleClickRegister = e => {
    setOpenRegisterDialog(true)
  }

  return (
    <>
      {/* <div className={classes.heroContent}>
        <Container maxWidth='sm'>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='textSecondary'
            paragraph
          >
            {description}
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify='center'>
              <Grid item>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleClickPrimary}
                >
                  Login
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={handleClickRegister}
                >
                  Register
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' color='primary'>
                  Contact Us
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div> */}
      <div
        id='hero'
        className='py-12 flex flex-col items-center justify-center bg-white'
      >
        <div className='max-w-lg text-center'>
          <h1 className='text-6xl font-thin text-gray-900'>{title}</h1>
          <p className='mt-4 text-xl text-center text-gray-600'>
            {description}
          </p>
          <ul className='flex flex-row items-center justify-center mt-8'>
            <li>
              <button
                onClick={handleClickPrimary}
                className='px-3 hover:shadow-md py-2 mx-2 font-bold text-white uppercase hover:bg-indigo-900 bg-indigo-800 rounded shadow-sm focus:outline-none'
              >
                login
              </button>
            </li>
            <li>
              <button
                onClick={handleClickRegister}
                className='px-3 hover:shadow-md py-2 mx-2 font-bold text-white uppercase hover:bg-red-800 bg-red-700 rounded shadow-sm focus:outline-none'
              >
                register
              </button>
            </li>
            <li>
              <button className='px-3 hover:shadow-md py-2 mx-2 font-bold text-blue-700 hover:bg-blue-100 uppercase border border-blue-700 rounded shadow-sm focus:outline-none'>
                contact us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Hero
