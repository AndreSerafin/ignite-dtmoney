import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/default'
import { GlobalStyle } from './global'
import { Router } from './routes/Routes'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
