import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Title from '../shared/Title'
import { interpolateRgb } from 'd3-interpolate'

import { useGlobalContext } from '../../contexts/globalContext'

// Generate Order Data
function preventDefault(event) {
  event.preventDefault()
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}))

const Details = () => {
  const classes = useStyles()
  const { db } = useGlobalContext()
  const theme = useTheme()

  const createRowColorForLowHalf = value => {
    const startColor = theme.palette.secondary.light
    const endColor = theme.palette.background.paper
    const interpolate = interpolateRgb(startColor, endColor)
    // value needs to be in range of 0-1, however we *2 so we can only color the first 50% of values
    const color = interpolate((value / 100) * 2)
    return color
  }

  return (
    <>
      <Title>Summary Logs</Title>
      {db.tanks ? (
        <>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell>Tank ID</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Value</TableCell>
                {/* <TableCell align='right'>Sale Amount</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {db.tanks.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description || 'tank comment'}</TableCell>
                  <TableCell
                    style={{
                      backgroundColor: createRowColorForLowHalf(row.value),
                    }}
                  >
                    {row.value}
                  </TableCell>
                  {/* <TableCell align='right'>{row.amount}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className={classes.seeMore}>
            <Link color='primary' href='#' onClick={preventDefault}>
              See more logs
            </Link>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Details
