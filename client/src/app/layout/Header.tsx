import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const Header = ({darkMode,handleThemeChange}:Props) => {
  return (
    <AppBar position='static' sx={{mb: 4}}>
        <Toolbar>
            <Typography>
                E-Commerce
            </Typography>
            <Switch checked={darkMode} onChange={handleThemeChange}/>
        </Toolbar>
    </AppBar>
  )
}

export default Header