import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '../../themes';



/* La forma en como agregamos el ThemeProvider, createTheme, CssBaseline en el App componente es primordial  */
/* para establecer el tema de manera adecuada en todo el proyecto y hacer la configuracion global correctamente */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
  
}
