import React from 'react'
import { makeStyles, useTheme, Grid, Paper } from '@material-ui/core'
import Title from '../Elements/Title'
import LiquidGauge from './LiquidGauge'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}))

export default function Tanks() {
  const theme = useTheme()
  const classes = useStyles()

  const tanks = new Array(4).fill({}).map((t, i) => {
    return { title: `Tank ${i + 1}`, value: Math.random() * 100 }
  })

  return (
    <>
      {tanks.map((tank, index) => (
        <Grid item xs={12} md={4} lg={3} key={index}>
          <Paper className={classes.paper}>
            <Title>{tank.title}</Title>
            <LiquidGauge
              value={tank.value}
              radius={100}
              endColor={theme.palette.primary.main}
              startColor={theme.palette.secondary.main}
              textStyleColor={theme.palette.text.primary}
              waveTextStyleColor={'#fff'}
            />
          </Paper>
        </Grid>
      ))}
    </>
  )
}
