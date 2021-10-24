import { createMuiTheme } from '@material-ui/core/styles'
import { teal, orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#3d88ec',
      main: '#1877F2',
      dark: '#0059cb',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd95b',
      main: '#ffa726',
      dark: '#c77800',
      contrastText: '#000',
    },
      openTitle: teal['700'],
      protectedTitle: orange['700'],
      type: 'light'
    }
  })

  export default theme  