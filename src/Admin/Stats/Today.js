// @ts-nocheck
import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts'
import Title from '../shared/Title'
import { useGlobalContext } from '../../contexts/globalContext'

export default function Chart() {
  const {
    db: { today: data },
  } = useGlobalContext()
  const theme = useTheme()

  return (
    <>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey='time' stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position='left'
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Meters (M)
            </Label>
          </YAxis>
          <Line
            type='monotone'
            dataKey='value'
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}
