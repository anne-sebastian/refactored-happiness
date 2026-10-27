import { createTheme } from './index'

export const createResumeTheme = (mode: 'light' | 'dark' | 'seasons') =>
  createTheme({
    palette: mode === 'dark'
      ?  {
    mode: 'dark',
    primary: {
      main: '#fff',
      dark: '#03070a',
    },
    secondary: {
      main: '#9c27b0',
    }
  }
      : mode === 'seasons'
        ? { mode: 'light', primary: { main: '#2a9d8f' }, secondary: { main: '#e76f51' } }
        : { mode: 'light', primary: { main: '#1d3557' }, secondary: { main: '#e09f3e' } },
    typography: {
      fontFamily: '"DM Sans", "Segoe UI", sans-serif',
      h2: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700 },
      h3: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700 },
    },
    shape: { borderRadius: 10 },
  })
