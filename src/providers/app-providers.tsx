import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

interface AppProvidersProps {
  children: JSX.Element | JSX.Element[]
}

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
