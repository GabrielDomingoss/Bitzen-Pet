import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#00b8c4',
    },
    secondary: {
      main: '#19857b',
    },

    error: {
      main: red.A400,
    },
  },
})

export default theme
