import { withStyles } from '@material-ui/core'
// import { yellow } from '@material-ui/core/colors'

const styles = theme => ({
  '@global': {
    /**
     * Disable the focus outline, which is default on some browsers like
     * chrome when focusing elements
     */
    '*:focus': {
      outline: 0,
    },
    // '.highlight': {
    //   color: yellow,
    // },
  },
})

export default withStyles(styles, { withTheme: true })(() => null)
