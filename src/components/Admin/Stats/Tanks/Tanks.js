import React from 'react'
import { makeStyles, useTheme, Grid, Paper } from '@material-ui/core'
import Title from '../../Elements/Title'
import LiquidGauge from './LiquidGauge'
import { useGlobalContext } from '../../../../contexts/globalContext'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}))

export default function Tanks() {
  const { db } = useGlobalContext()

  const theme = useTheme()
  const classes = useStyles()

  return (
    <>
      {db?.tanks ? (
        db.tanks.slice(0, 4).map((tank, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper className={classes.paper}>
              <Title>{tank.name}</Title>
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
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
