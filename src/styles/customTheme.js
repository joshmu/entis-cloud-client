import { createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import red from '@material-ui/core/colors/red'

const customTheme = createMuiTheme({
  palette: {
    primary: {
      // light: '#000',
      main: indigo[800],
      // dark: '#000',
      // contrastText: '#000',
    },
    secondary: {
      //   light: '#000',
      main: red[700],
      //   dark: '#000',
      //   contrastText: '#000',
    },
    // error: {
    //   main: '#000',
    //   light: '#000',
    //   dark: '#000',
    //   contrastText: '#000',
    // },
    // divider: '#000',
    // action: {
    //   active: '#000',
    //   hover: '#000',
    //   selected: '#000',
    //   disabled: '#000',
    //   disabledBackground: '#000',
    // },
    // text: {
    //   primary: '#000',
    //   secondary: '#000',
    //   disabled: '#000',
    //   hint: '#000',
    //   // icon: '#000',
    // },
    // common: {
    //   black: '#000',
    //   white: '#000',
    // },
    // background: {
    //   default: '#000',
    //   paper: '#000',
    // },
  },
})

export default customTheme
