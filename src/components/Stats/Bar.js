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
import Title from '../Elements/Title'

const data = new Array(20).fill({}).map((t, i) => {
  return { name: `Tank ${i + 1}`, value: Math.random() * 100 }
})

const formatTooltipValue = (value, name, props) => [
  value.toFixed(2) + '%',
  name,
]

export default function Chart() {
  const theme = useTheme()

  return (
    <>
      <Title>Levels</Title>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 0,
          }}
          barSize={25}
        >
          <XAxis dataKey='name' padding={{ left: 10, right: 10 }} />
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
  )
}
