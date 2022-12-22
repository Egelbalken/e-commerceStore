import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, List, ListItem, Toolbar } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';

// Inteface for the darkMode for App
interface Props {
  darkMode: boolean;
  hanldeThemeChange: () => void;
}

// Arrays of nav links
const midlinks =[
  {title: 'catalog', path: '/catalog'},
  {title: 'about', path: '/about'},
  {title: 'contact', path: '/contact'},
]


const rightlinks =[
  {title: 'login', path: '/login'},
  {title: 'register', path: '/register'},
]

const navStyles = {

  color: 'inherit', 
  typography: 'h6',
  textDecoration: 'none',
  '&:hover':{
      color: 'grey.500'
  },
  '&.active': {
    color: 'text.secondary'
  }
}

export default function Header ({darkMode, hanldeThemeChange}: Props)   {

  return (
    <Fragment>
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              
              <Box display='flex' alignItems='center'>
                <Typography variant='h6' component={NavLink} 
                  to='/' 
                  exact 
                  sx={navStyles}>
                  E-Commerce Imonit
                </Typography>
                <Switch checked={darkMode} onChange={hanldeThemeChange}/>
              </Box>
                
                <List sx={{display: 'flex'}}>
                  {midlinks.map(({title,path}) => (
                    <ListItem
                      component={NavLink}
                      to={path}
                      key={path}
                      sx ={navStyles}
                    >
                      {title.toUpperCase()}
                    </ListItem>
                  ))}
                </List>

              <Box display='flex' alignItems='center'>
                <IconButton size='large' sx={{color: 'white'}}>
                  <Badge badgeContent={4} color='secondary'>
                    <ShoppingCart />
                  </Badge>
                </IconButton>
                <List sx={{display: 'flex'}}>
                  {rightlinks.map(({title,path}) => (
                    <ListItem
                      component={NavLink}
                      to={path}
                      key={path}
                      sx ={navStyles}
                      >
                      {title.toUpperCase()}
                    </ListItem>
                  ))}
                </List>
              </Box>
              
            </Toolbar>
        </AppBar>
    </Fragment>
  )
}