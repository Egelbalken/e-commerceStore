import { AppBar, Toolbar } from '@mui/material'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import React, { Fragment } from 'react'

// Inteface for the darkMode for App
interface Props {
  darkMode: boolean;
  hanldeThemeChange: () => void;
}

export default function Header ({darkMode, hanldeThemeChange}: Props)   {



  return (
    <Fragment>
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6'>
                    E-Commerce Imonit
                </Typography>
                <Switch checked={darkMode} onChange={hanldeThemeChange}/>
            </Toolbar>
        </AppBar>
    </Fragment>
  )
}