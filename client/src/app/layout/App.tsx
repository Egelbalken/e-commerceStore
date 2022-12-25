import { Fragment, useState } from 'react';
import Catalog from '../features/catalog/Catalog';
import { Container, createTheme, CssBaseline } from '@mui/material';
import Header from './Header';
import { ThemeProvider } from '@emotion/react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType ==='light' ? '#eaeaea' : '#121212' 
      }

    }
  })

  function hanldeThemeChange(){
    setDarkMode(!darkMode);
  }

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header darkMode={darkMode} handleThemeChange={hanldeThemeChange}/>
        <Container>
          <Catalog />
        </Container>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
