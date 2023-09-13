"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CheckBox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";
import Link from "next/link";
import {useState} from 'react';
import {useRouter} from "next/navigation";


const Lag = [
  { label: "한국어", language: "korean" },
  { label: "English", language: "english" },
];

const Login = () => {
  const [userid, useridupdate] = useState('');
  const [password, passwordupdate] = useState('');
  const router = useRouter();
  const ProceedLogin = (e:any) => {
    e.preventDefault();
  if(vaildate()) {
    fetch("http://localhost:8000/User/"+ userid).then((res) => {
      return res.json();
    }).then((resp)=> {
      if(Object.keys(resp).length === 0) {
        alert('등록되지 않는 유저입니다.');
      } else {
        if(resp.password === password) {
          alert('로그인성공')
       router.push("/input");
        }else{
          alert('비밀번호 오류')
        }
      }
        console.log(resp)
    }).catch((error) => {
      alert('로그인 실패입니다.');
    });

  }
  }

const vaildate= () => {
  let result = true;
  if (userid === '' || userid === null) {
    result=false;
    alert('아이디를 입력하세요')
  }
  if (password === '' || password === null) {
    result=false;
    alert('비밀번호를 입력하세요')
  }
return result;
}


  return (
    <Box
    display="grid"
    justifyContent="center"
    alignItems="center"
    mt={10}
    >
      <Box
      // sx={{ border: 1, borderColor: "grey.400", borderRadius: "5px" }}

      // display="grid"
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={10}>
            {/* <Item> */}
            <Link href="/">
              <Image src="/logo.png" width={150} height={50} alt="" />
            </Link>
            {/* </Item> */}
          </Grid>
          <Grid item xs={2}>
            {/* <Item> */}
            <Autocomplete
              disablePortal
              id="combo-box"
              options={Lag}
              value={Lag[0]}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} label="language" />
              )}
            />
    

            {/* </Item> */}
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          border:1,
          borderColor: 'grey.300',
          boxShadow: 2,
          marginTop: 2,
        }}
        // display="grid"
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="start"
        >
          <Grid item xs={5}> 
            {/* <Item> */}
            <Grid container direction={"column"} sx={{mt:13, ml:2, p:3}}>
         
              <Grid item xs={2}>
                {/* <Item> */}      
                   
                <Typography
                  sx={{ fontWeight: "bold" , letterSpacing: 5 }}
                  fontSize={20}
                  component="div"
                >
                  <span style={{ color: "#ff0000" }}>T</span>CI &nbsp;
                  <span style={{ color: "#ff0000" }}>T</span>otal &nbsp;
                  <span style={{ color: "#ff0000" }}>M</span>onitoring &nbsp;
                  <span style={{ color: "#ff0000" }}>S</span>ystem
                </Typography>
                {/* </Item> */}
              </Grid>
              {/* <Grid container direction={"column"}> */}
              <React.Fragment>
           < Box component="form" autoComplete="off" onSubmit={ProceedLogin}>
              <Grid item xs={6}>
                <Grid container direction={"row"} justifyContent="flex-start">
                  <Grid item xs={8}>
                    {/* <Item> */} 
                    <TextField label="id" 
                    value={userid} 
                    onChange={e=>useridupdate(e.target.value)} 
                    fullWidth={true}/>
                    {/* </Item> */}
                    {/* <Item> */}
                    <Box
                      sx={{
                        mt: 1,
                      }}
                    ></Box>
                    
                    <TextField
                      label="password"
                      value={password}
                      onChange={e=>passwordupdate(e.target.value)} 
                      type="password"
                      fullWidth={true}
                    />
                    {/* </Item> */}
                  </Grid>
                  <Grid item xs={3}>
                    {/* <Item> */}
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      fullWidth={true}
                      sx={{ height: "100%", marginLeft: 1 }}
                    >
                      LOGIN
                    </Button>
                    {/* </Item> */}
              
                  </Grid>
                </Grid>
              </Grid>
              </Box>
              </React.Fragment>
              <Grid item xs={2}>
                {/* <Item> */}

                <FormControlLabel
                  control={<CheckBox value="rememberid" color="secondary" />}
                  label="아이디 저장"
                />
                {/* </Item> */}
              </Grid>
              <Grid item xs={2}>
                {/* <Item> */}
                <Box
                border={'1px dashed'}
                  sx={{
                    mt: 4,
                    mb: 1.5,
                  
                    color:'grey.400',
                  }}
                ></Box>
                <Button
                  href="/"
                  color="primary"
                  variant="contained"
                  sx={{ marginRight: 1, borderRadius: 8 }}
                >
                  {" "}
                  <SearchIcon />
                  비밀번호 찾기
                </Button>
                <Button
                  href="/"
                  color="primary"
                  variant="contained"
                  sx={{ borderRadius: 8 }}
                >
                  {" "}
                  <LockIcon /> 비밀번호 변경
                </Button>
                {/* </Item> */}
              </Grid>
              {/* </Grid> */}
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Box marginLeft={1} marginTop={1} marginRight={1}>
              <Image
                src="/kumhoimg.png"
                width={500}
                height={670}
                alt=""
                style={{ width: "100%",height: "55vh" }}
              />
              </Box>
              
          </Grid>

          {/* </Item> */}
   
        </Grid>

        {/* </Grid> */}
              </Box>
    
    </Box>
  );
};

export default Login;
