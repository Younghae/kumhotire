"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Container from "@mui/material/Container";

const Item = styled(Box)(({ theme }) => ({
  border: "1px solid",
  borderRadius: "4px",
  ...theme.typography.h6,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  fontWeight: "bold",
}));

const language = [{ label: "한국어" }, { label: "영어" }];

const Login_Gyurye = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <Grid container justifyContent="flex-start" alignItems="center">
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-start"
            alignItems="center">
            <Item>
              <Image
                src="/logo.png"
                width={150}
                height={50}
                alt="kumhotire logo"
              />
            </Item>
          </Grid>
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-end"
            alignItems="center">
            <Item>
              <Autocomplete
                id="language"
                size="small"
                sx={{ width: 200 }}
                options={language}
                renderInput={(params) => (
                  <TextField {...params} label="한국어" />
                )}
              />
            </Item>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={5}>
            <Item>로그인</Item>
          </Grid>
          <Grid item xs={7}>
            <Item>그림 들어가는 곳</Item>
          </Grid>
        </Grid>
        <Grid>
          <Item>3</Item>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login_Gyurye;
