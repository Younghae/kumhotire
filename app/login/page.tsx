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
import Autocomplete from '@mui/material/Autocomplete';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const Lag = [
  {label: '한국어', language:'korean'},
  {label: 'English', language:'english'}
]


const Login = () => {
  return (
  <><Box sx={{ flexGrow: 1 }}>
      <Item>
        <Grid container
          justifyContent="space-between"
          rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={10}>
            <Item>
              <Image
                src="/logo.png"
                width={"200"}
                height={"55"}
                alt="" />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <Autocomplete
                disablePortal
                id="combo-box"
                options={Lag}
                sx={{ width: '100%' }}
                renderInput={(params) => <TextField {...params} label="language" />} />
            </Item>
          </Grid>
        </Grid>
      </Item>

    </Box>

    <Box sx={{ flecxGrow: 1 }}>
    <Grid   container
  direction="row"
  justifyContent="flex-start"
    alignItems="center"
 >
    <Grid item xs={7}>
      <Grid container>
            <Item>
          <Typography sx={{ fontWeight: 'bold' }} fontSize={20} component="div">
            <span style={{ color: "#ff0000" }}>T</span>CI &nbsp;
            <span style={{ color: "#ff0000" }}>T</span>otal &nbsp;
            <span style={{ color: "#ff0000" }}>M</span>onitoring &nbsp;
            <span style={{ color: "#ff0000" }}>S</span>ystem
          </Typography>
          <Item>
          <Grid container >
            <Grid item>
            <Grid item>
              <Item>
          <TextField label="id" />
          </Item>
          <Item>
          <TextField label="password" type='password' />
          </Item>
          <Item>
          <FormControlLabel control={<CheckBox value="rememberid" />}
            label="아이디 저장" />
          </Item>
          <Item>
          <Button href="/" color='secondary' variant="outlined">  <SearchIcon />비밀번호 찾기</Button>
          <Button href="/" color='secondary' variant="outlined"> <LockIcon /> 비밀번호 변경</Button>
          </Item>
          </Grid>
      </Grid>
      <Grid item >
          <Item>
          <Button type='submit' variant='contained' color='primary' style={{width:100, height:120}} >
            로그인
          </Button>
          </Item>
          </Grid>
          
       
          </Grid>
          </Item>
          </Item>
          
          </Grid>
          </Grid>
        
          
          <Grid item xs={5}>
          <Image
            src="/kumhoimg.jpg"
            width={"200"}
            height={"300"}
            alt=""
            style={{ width: '100%', height: '100%' }} />
        </Grid>
        </Grid>
      </Box></>

  );
}


export default Login;
