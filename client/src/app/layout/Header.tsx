import { AppBar, Toolbar } from '@mui/material'
import Typography from '@mui/material/Typography'
import React, { Fragment } from 'react'

export default function Header ()   {
  return (
    <Fragment>
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6'>
                    E-Commerce Imonit
                </Typography>
            </Toolbar>
        </AppBar>
    </Fragment>
  )
}