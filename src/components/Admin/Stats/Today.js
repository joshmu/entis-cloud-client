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
import Title from '../Elements/Title'

/** @param {number} num */
const create24Time = num => (num < 10 ? '0' + num : num) + ':00'

const hoursNow = new Date().getHours()
const data = new Array(24).fill({}).map((d, i) => {
  let amount
  if (i < hoursNow) amount = Math.random() * 100 + i * 10
  return {
    time: create24Time(i + 1),
    value: amount,
  }
})

export default function Chart() {
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
