"use client";
import React from "react";
import { Grid, AppBar, styled, Button, Box, Typography } from "@mui/material";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Menu = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

const MenuItem = styled(Button)({
  fontWeight: 900,
  color: "white",
  fontSize: "18px",
  marginRight: "2px",
  "&:hover": {
    backgroundColor: "black",
    transition: "0.2s",
  },
});

const LoginButton = styled(Button)({
  fontWeight: 900,
  fontSize: "10px",
  backgroundColor: "#454B52",
  color: "white",
  "&:hover": {
    backgroundColor: "black",
    transition: "0.2s",
  },
});
const Header = () => {
  const {data:session} = useSession();
  return (
    <Box>
      <Box mt={1} mb={0.5}>
        <Grid container spacing={4}>
          <Grid item xs={11}>
            <Link
              style={{ textDecoration: "none", color: "black", fontSize: "12" }}
              href={"/"}
            >
              <Typography>TCI 통합 모니터링 시스템</Typography>
            </Link>
          </Grid>
          <Grid item xs={1}>
            {session?.user ? (
              <>
              <Typography> {session.user.name}님 반갑습니다.</Typography>
              <LoginButton onClick={()=> signOut()} sx={{ borderRadius: "16px" }}>
              로그아웃
            </LoginButton>
              </>
            ):(
            <LoginButton onClick={()=> signIn()} sx={{ borderRadius: "16px" }}>
              로그인
            </LoginButton>
            )}
            
          </Grid>
        </Grid>
      </Box>
      <Box>
        <AppBar
          position="static"
          elevation={0}
          sx={{ backgroundColor: "#454B52" }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Menu>
                <MenuItem href="/">종합현황</MenuItem>
                <MenuItem href="/">Idea 추진 현황</MenuItem>
                <MenuItem href="/">My Idea</MenuItem>
                <MenuItem href="/">시스템 공통</MenuItem>
                <MenuItem href="/master">마스터 관리</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Header;
