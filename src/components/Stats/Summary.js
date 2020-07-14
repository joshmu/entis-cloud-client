import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from '../Elements/Title'

function preventDefault(event) {
  event.preventDefault()
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
})

export default function Deposits() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Title>Summary</Title>
      <Typography component='p' variant='h4'>
        9,653M
      </Typography>
      <Typography color='textSecondary' className={classes.depositContext}>
        on 14 July, 2020
      </Typography>
      <div>
        <Link color='primary' href='#' onClick={preventDefault}>
          View more
        </Link>
      </div>
    </React.Fragment>
  )
}
