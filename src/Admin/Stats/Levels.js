import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
} from 'recharts'
import Title from '../shared/Title'

import { useGlobalContext } from '../../contexts/globalContext'

const formatTooltipValue = (value, name, props) => [
  value.toFixed(2) + '%',
  name,
]

export default function Levels() {
  const theme = useTheme()
  const {
    db: { data: {assets}},
  } = useGlobalContext()

  return (
    <>
      {assets ? (
        <>
          <Title>Levels</Title>
          <ResponsiveContainer>
            <BarChart
              width={500}
              height={300}
              data={assets}
              margin={{
                top: 16,
                right: 16,
                bottom: 0,
                left: 0,
              }}
              barSize={25}
            >
              <XAxis
                dataKey='asset_name'
                hide={true}
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip formatter={formatTooltipValue} label='test' />
              <Bar
                dataKey='value'
                fill={theme.palette.primary.main}
                background={{ fill: '#eee' }}
              />
            </BarChart>
          </ResponsiveContainer>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
