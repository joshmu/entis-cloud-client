import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import Title from '../../shared/Title'
import LiquidGauge from './LiquidGauge'
import { useGlobalContext } from '../../../contexts/globalContext'

export default function Tanks() {
  const {
    db: {
      data: { assets },
    },
  } = useGlobalContext()

  const theme = useTheme()

  return (
    <>
      {assets ? (
        assets.slice(0, 8).map((asset, index) => (
          <div
            key={index}
            className='h-dash col-span-3 lg:col-span-2 flex flex-col p-4 bg-white shadow rounded-sm'
          >
            <Title>{asset.asset_name}</Title>
            <LiquidGauge
              value={asset.value}
              radius={100}
              endColor={theme.palette.primary.main}
              startColor={theme.palette.secondary.main}
              textStyleColor={theme.palette.text.primary}
              waveTextStyleColor={'#fff'}
            />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
