import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import CheckBox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image'
const Login = () => {
  return (
    <Box display='flex' justifyItems='center' alignItems='center' sx={{p:2, border:'1px solid grey', width:'75%', height:'50%'}}>
     <Typography sx={{fontWeight: 'bold'}} component="h1" variant='h5' >
        로그인
   
    <Typography  sx={{fontWeight: 'bold'}} component="div">
   <span style={{color:"#ff0000"}}>T</span>CI &nbsp;
   <span style={{color:"#ff0000"}}>T</span>otal &nbsp;
   <span style={{color:"#ff0000"}}>M</span>onitoring &nbsp;
   <span style={{color:"#ff0000"}}>S</span>ystem 
   </Typography>
   <Box>
    <TextField label="id" />
    </Box>
    <Box>
    <TextField label="password" type='password'/>
    </Box>
    <FormControlLabel control={<CheckBox value="rememberid"/>}
    label="아이디 저장"/>
    <Button type='submit' variant='contained' color='secondary'>
        로그인
    </Button>


    <Grid container>
        <Grid item>
         <SearchIcon />
        <Link href="/">비밀번호 찾기</Link>
        </Grid>
        <Grid item xs>
        <LockIcon />
        <Link href="/">비밀번호 변경</Link>
        </Grid>
    </Grid>
    </Typography>
    <Box>
    <Image
      src="/kumhoimg.jpg"
      width={300}
      height={300}
      alt=""
    />
    </Box>
    </Box>
    
  );
}

export default Login;
