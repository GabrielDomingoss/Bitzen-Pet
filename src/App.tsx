import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import theme from './styles/themes/default'
import { ThemeProvider } from '@emotion/react'
import { GlobalStyle } from './styles/global'
import { CssBaseline } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Router></Router>
        </BrowserRouter>
        <GlobalStyle></GlobalStyle>
      </ThemeProvider>
    </LocalizationProvider>
  )
}
