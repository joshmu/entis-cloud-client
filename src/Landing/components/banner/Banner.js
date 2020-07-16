import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import honeywellImg from './assets/honeywell.png'

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
  },
}))

const Banner = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Grid container justify='center'>
        <Grid item xs={8} sm={6} md={4}>
          <img
            src={honeywellImg}
            alt='honeywell compnay logo banner'
            height='100%'
            width='100%'
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Banner
