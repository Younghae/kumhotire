"use client";
import React, { ChangeEventHandler, FormEventHandler, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CheckBox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import SearchIcon from "@mui/icons-material/Search";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Image from "next/image";
import Autocomplete from "@mui/material/Autocomplete";
import Link from "next/link";
import {Alert} from "@mui/material"
import { signIn } from "next-auth/react";
import { useState,FormEvent } from "react";
import { useRouter } from "next/navigation";
import { NextPage } from "next";

const Lag = [
  { label: "한국어", language: "korean" },
  { label: "English", language: "english" },
];

const Login: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ id: "", password: "" });
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [blankPw, setBlankPw] = useState(false)
  const [blankId, setBlankId] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter()
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }
  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (id.length <= 0)
      setBlankId(true)
    if (password.length <= 0)
      setBlankPw(true)
    if (!blankId && !blankPw) {
    // 로그인 부분
      await signIn("credentials", {
        id: id,
        password: password,
        redirect: false,
      }).then((result) => {
        if (result?.ok)
          router.push('/login')
        if (result?.error)
          setError(true)
      });
    }
  }
/*
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      id: userInfo.id,
      password: userInfo.password,
      redirect: false,
    });

    console.log(res);
  };
*/
  return (
    <Box display="grid" justifyContent="center" alignItems="center" mt={8}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
            renderInput={(params) => <TextField {...params} label="language" />}
          />

          {/* </Item> */}
        </Grid>
      </Grid>
      <Box
        sx={{
          // border: 1,
          // borderColor: "grey.300",
          boxShadow: 2,
          marginTop: 2,
        }}
        // display="grid"
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="start">
          <Grid item xs={5}>
            {/* <Item> */}
            <Grid container direction={"column"} sx={{ mt: 4, ml: 2, p: 3 }}>
              <Grid item xs={2}>
                {/* <Item> */}

                <Typography
                  sx={{ fontWeight: "bold", letterSpacing: 4 }}
                  fontSize={18}
                  component="div">
                  <span style={{ color: "#ff0000" }}>T</span>CI&nbsp;
                  <span style={{ color: "#ff0000" }}>T</span>otal&nbsp;
                  <span style={{ color: "#ff0000" }}>M</span>onitoring&nbsp;
                  <span style={{ color: "#ff0000" }}>S</span>ystem
                </Typography>
                <Box
                  sx={{
                    mt: 1,
                  }}></Box>
                {/* </Item> */}
              </Grid>
              {/* <Grid container direction={"column"}> */}
              {/* <React.Fragment> */}
              <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
                <Grid item xs={6}>
                  <Grid
                    container
                    direction={"row"}
                    justifyContent="flex-start"
                    // sx={{
                    //   border: 1,
                    //   borderColor: "grey.300",
                    // }}
                  >
                    <Grid item xs={8}>
                      {/* <Item> */}

                      <TextField
                        label="id"
                        value={id}
                   onChange={onChangeId}
                  onBlur={()=>setBlankId(id.length <= 0)}
                 placeholder="아이디"

                        // fullWidth={true}
                      />        {blankId && <Alert severity="error">아이디를 입력해주세요</Alert>}
                      {/* </Item> */}
                      {/* <Item> */}
                      <Box
                        sx={{
                          mt: 1,
                        }}></Box>

                      <TextField
                        label="password"
                        type="password"
                        value={password}
                        onChange={onChangePw}
                        onBlur={()=>setBlankPw(password.length <= 0)}
                        placeholder="비밀번호"
                        // fullWidth={true}
                      />  {blankPw && <Alert severity="error">비밀번호를 입력해주세요</Alert>}
                      {/* </Item> */}
                    </Grid>
                    <Grid item xs={4}>
                      {/* <Item> */}
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        // fullWidth={true}
                        sx={{ height: "100%", marginLeft: 1 }}>
                        LOGIN
                      </Button>
                      {/* </Item> */}
                    </Grid>
                  </Grid>
                </Grid>
                {error && 
                <Alert severity="error">비밀번호를 확인해주세요</Alert>}
              </Box>
              {/* </React.Fragment> */}
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
                  border={"1px dashed"}
                  sx={{
                    mt: 4,
                    mb: 1.5,

                    color: "grey.400",
                  }}></Box>
                <Button
                  href="/findid"
                  color="primary"
                  variant="contained"
                  sx={{ marginRight: 1, marginTop: 1, borderRadius: 8 }}>
                  {" "}
                  <SearchIcon />
                  아이디 찾기
                </Button>
                <Button
                  href="/forgotpassword"
                  color="primary"
                  variant="contained"
                  sx={{ marginTop: 1, borderRadius: 8 }}>
                  {" "}
                  <LockIcon /> 비밀번호 변경
                </Button>
                <Button
                  href="/signup"
                  color="primary"
                  variant="contained"
                  sx={{ marginLeft: 1, marginTop: 1, borderRadius: 8 }}>
                  <PeopleAltIcon />
                  회원가입
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
                style={{ width: "100%", height: "55vh" }}
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
