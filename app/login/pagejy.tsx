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
import Link from 'next/link';


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
    <Box justifyContent="space-between" sx={{border:1, borderColor: 'grey.400',borderRadius: '5px'}} m={20} pt={10} style={{width:'80%', height:'100%'}}>
        <Box sx={{border:1, borderColor: 'grey.400',borderRadius: '5px'}}  display="grid"  >
      <Item>
        <Grid container
          justifyContent="space-between"
          rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={10}>
            <Item>
              <Link href="/">
                
              <Image
                src="/logo.png"
                width={"200"}
                height={"55"}
                alt=""
                 />
                 </Link>
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
    <Box sx={{border:1, borderColor: 'grey.400',borderRadius: '5px'}}  display="grid"  >
    <Grid   container
   direction="row"
   justifyContent="flex-end"
    alignItems="center"
 >
    <Grid item xs={5}>
    <Item>
    <Grid container direction={'column'}>
      <Grid item>
        <Item>
          <Typography sx={{ fontWeight: 'bold' }} fontSize={20} component="div">
            <span style={{ color: "#ff0000" }}>T</span>CI &nbsp;
            <span style={{ color: "#ff0000" }}>T</span>otal &nbsp;
            <span style={{ color: "#ff0000" }}>M</span>onitoring &nbsp;
            <span style={{ color: "#ff0000" }}>S</span>ystem
            </Typography>
            </Item>
          <Grid container direction={'column'} >
          <Grid item >
          <Grid container direction={'row'} >
          <Grid item xs={8}>
          <Item>
          <TextField label="id" />
          </Item>
          <Item>
          <TextField label="password" type='password' />
          </Item>
            </Grid>
            <Grid item xs={4}>
            <Item>
          <Button type='submit' variant='contained' color='secondary'fullWidth={true} sx={{ height: '100%' ,mt: 10}} >
            LOGIN
          </Button>
          </Item>
          </Grid>
          </Grid>
          </Grid>
          <Item>
          <FormControlLabel control={<CheckBox value="rememberid" color='secondary'/>}
            label="아이디 저장" />
          </Item>
          <Item>
          <Button href="/" color='secondary' variant="outlined">  <SearchIcon />비밀번호 찾기</Button>
          <Button href="/" color='secondary' variant="outlined"> <LockIcon /> 비밀번호 변경</Button>
          </Item>
            
          </Grid>
          </Grid>  
      </Grid>
      </Item>
      </Grid>
    <Grid item xs={6}>
            <Item>
          <Image
            src="/kumhoimg.jpg"
            width={"200"}
            height={"170"}
            alt=""
            style={{ width: '90%', height: '90%' }} />
            </Item>
        </Grid>
        
        </Grid>
        </Box>
      </Box>

  );
}


export default Login;

