import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// colors
const primary = '#283593' // indigo900
const secondary = '#D32F2F' // red700

const theme = createMuiTheme({
  palette: {
    primary: { main: primary },
    secondary: { main: secondary },
  },
})

export default responsiveFontSizes(theme)
