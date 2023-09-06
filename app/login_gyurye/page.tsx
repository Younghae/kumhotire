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
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

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

const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
          <Grid
            item
            xs={5}
            container
            direction="column"
            justifyContent="center"
            alignItems="center">
            <Grid>
              <Item>
                <Box
                  sx={{
                    color: "#EF0010",
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: 25,
                  }}>
                  T
                </Box>
                <Box
                  sx={{
                    color: "#4A4A49",
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: 25,
                  }}>
                  CI &nbsp;
                </Box>
                <Box
                  sx={{
                    color: "#EF0010",
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: 25,
                  }}>
                  T
                </Box>
                <Box
                  sx={{
                    color: "#4A4A49",
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: 25,
                  }}>
                  otal &nbsp;
                </Box>
                <Box
                  sx={{
                    color: "#EF0010",
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: 25,
                  }}>
                  M
                </Box>
                <Box
                  sx={{
                    color: "#4A4A49",
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: 25,
                  }}>
                  onitoring &nbsp;
                </Box>
                <Box
                  sx={{
                    color: "#EF0010",
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: 25,
                  }}>
                  S
                </Box>
                <Box
                  sx={{
                    color: "#4A4A49",
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: 25,
                  }}>
                  ystem &nbsp;
                </Box>
              </Item>
            </Grid>
            <Grid container justifyContent="center" alignItems="center">
              <Grid>
                <Grid>
                  <TextField label={"ID"} id="ID" margin="dense" />
                </Grid>
                <Grid>
                  <TextField label={"PASSWORD"} id="PASSWORD" margin="dense" />
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: 1 }}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ width: "150px", height: "125px", fontSize: "1.8rem" }}>
                  LOGIN
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid>
                <Checkbox defaultChecked color="error" />
                <Typography
                  sx={{
                    color: "#4A4A49",
                    display: "inline",
                    fontSize: 15,
                  }}>
                  아이디저장
                </Typography>
              </Grid>
              <Grid>
                <Item>신뢰 Site 추가</Item>
              </Grid>
            </Grid>
            <Grid>
              <Item>문구2</Item>
            </Grid>
            <Grid>
              <Item>버튼2개</Item>
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Item>
              <Image
                src="/kumhoimg.jpg"
                width={"0"}
                height={"0"}
                sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                alt="kumhotire image"
              />
            </Item>
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
