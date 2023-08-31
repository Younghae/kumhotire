"use client"
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import CheckBox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Login = () => {
  return (
  <Box sx={{p:2, border:'1px solid grey', width:'75%', height:'50%'}}>
    <Item>
      <Grid container>
        <Box>
        <Grid item>
          <Item>
        <Image
      src="/logo.png"
      width={"100"}
      height={"40"}
      alt=""
    /> 
    </Item>
      </Grid>
      </Box>
      </Grid>
    </Item >
    <Box display='flex' justifyItems='center' alignItems='center' sx={{p:2, border:'1px solid grey'}} >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
      <Grid container spacing={1}
        direction="column"
        justifyContent="space-around"
        alignItems="stretch"> 
        <Grid item xs>
          <Item>  <Typography  sx={{fontWeight: 'bold'}} component="div">
   <span style={{color:"#ff0000"}}>T</span>CI &nbsp;
   <span style={{color:"#ff0000"}}>T</span>otal &nbsp;
   <span style={{color:"#ff0000"}}>M</span>onitoring &nbsp;
   <span style={{color:"#ff0000"}}>S</span>ystem 
   </Typography></Item>
        </Grid>
        <Grid container spacing={1}
        direction="column"
        justifyContent="space-around"
        alignItems="stretch"> 
          <Item>
            <Item>
    <TextField label="id" />
    </Item>
    <Item>
    <TextField label="password" type='password'/>
      <Item>
      <Button type='submit' variant='contained' color='primary'>
        로그인
    </Button>
      </Item>
            </Item>
            </Item>
        </Grid>
        <Grid item xs>
          <Item> <FormControlLabel control={<CheckBox value="rememberid"/>}
    label="아이디 저장"/></Item>
        </Grid>
          <Grid item xs>
          <Item>  <Grid item>
          <Button href="/" color='secondary' variant="outlined">  <SearchIcon />비밀번호 찾기</Button>
         <Button href="/" color='secondary' variant="outlined" > <LockIcon /> 비밀번호 변경</Button>
        </Grid></Item>
        </Grid>
      </Grid>
      </Grid>
      <Grid item xs={6}>
      <Image
      src="/kumhoimg.jpg"
      width={"200"}
      height={"300"}
      alt=""
      style={{width:'80%',height:'80%'}}
    />
        </Grid>
      </Grid>
    </Box>
    </Box>
    </Box>
  );
}


export default Login;
