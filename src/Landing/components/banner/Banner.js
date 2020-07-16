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
        <img
          src={honeywellImg}
          alt='honeywell compnay logo banner'
          width='33%'
        />
      </Grid>
    </Container>
  )
}

export default Banner
