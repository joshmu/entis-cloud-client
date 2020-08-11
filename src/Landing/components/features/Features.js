import React from 'react'
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}))

const Features = () => {
  const classes = useStyles()

  const cards = [1, 2, 3]

  return (
    <>
      {/* <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://source.unsplash.com/random'
                  title='Image title'
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>
                    View
                  </Button>
                  <Button size='small' color='primary'>
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container> */}
      <div className='flex justify-center items-center flex-wrap'>
        {cards.map(card => (
          <div key={card} className='w-full sm:w-1/2 md:w-64 p-4'>
            <div className='overflow-hidden shadow-md rounded border'>
              <img
                src='https://source.unsplash.com/_Dogn_h7Qek'
                alt='placeholder'
              />
              <div className='p-4'>
                <h2 className='text-2xl'>Heading</h2>
                <p className='mt-2 leading-relaxed text-md'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora reprehenderit totam eum libero natus vero.
                </p>
                <div className='flex justify-start w-1/2 mt-8'>
                  <button className='font-bold text-blue-800 uppercase'>
                    view
                  </button>
                  <button className='ml-8 font-bold text-blue-800 uppercase'>
                    edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Features
