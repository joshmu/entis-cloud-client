import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Title from '../../shared/Title'
import LiquidGauge from './LiquidGauge'
import { useGlobalContext } from '../../../contexts/globalContext'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}))

export default function Tanks() {
  const {
    db: {
      data: { assets },
    },
  } = useGlobalContext()

  const theme = useTheme()
  const classes = useStyles()

  return (
    <>
      {assets ? (
        assets.slice(0, 8).map((asset, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper className={classes.paper}>
              <Title>{asset.asset_name}</Title>
              <LiquidGauge
                value={asset.value}
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
