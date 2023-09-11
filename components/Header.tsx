"use client";
import React from 'react'
import { Container,AppBar, styled, Button, Box } from '@mui/material'

const Menu = styled(Box)({
    borderBottom:'1px solid black',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
});

const MenuItem = styled(Button)({
    fontWeight:900,
    fontSize:"12px",
    marginRight:"2px",
})

const Header = () => {
  return (
   <Box>
<AppBar position='static' color='secondary' elevation={0}>
    <Menu>
        <MenuItem>
        헤더입니다.
        </MenuItem>
    </Menu>
</AppBar>
   </Box>
  )
}

export default Header
