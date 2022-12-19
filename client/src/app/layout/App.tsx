import { Container, createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';


function App() {

  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? 'dark' : 'light'
  // Adding theme controle
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        // Need to add a conditional black color.
        default: paletteType ==  'light' ? '#eaeaea': '#121212'
      }
    }
  })

  // Sett the darkmode to the oposite of waht darkmode is.
  function hanldeThemeChange(){
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} hanldeThemeChange={hanldeThemeChange}/>
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
