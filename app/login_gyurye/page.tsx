"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import AddIconFill from "@mui/icons-material/AddBoxRounded";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";

const Item = styled(Box)(({ theme }) => ({
  border: "1px solid #4A4A49",
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
              <Grid>
                <Box
                  sx={{
                    color: "#EF0010",
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: 27,
                  }}>
                  T
                </Box>
                <Box
                  sx={{
                    color: "#4A4A49",
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: 27,
                  }}>
                  CI &nbsp;
                </Box>
                <Box
                  sx={{
                    color: "#EF0010",
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: 27,
                  }}>
                  T
                </Box>
                <Box
                  sx={{
                    color: "#4A4A49",
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: 27,
                  }}>
                  otal &nbsp;
                </Box>
                <Box
                  sx={{
                    color: "#EF0010",
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: 27,
                  }}>
                  M
                </Box>
                <Box
                  sx={{
                    color: "#4A4A49",
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: 27,
                  }}>
                  onitoring &nbsp;
                </Box>
                <Box
                  sx={{
                    color: "#EF0010",
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: 27,
                  }}>
                  S
                </Box>
                <Box
                  sx={{
                    color: "#4A4A49",
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: 27,
                  }}>
                  ystem &nbsp;
                </Box>
              </Grid>
              <Grid container justifyContent="center" alignItems="center">
                <Grid>
                  <Grid>
                    <TextField label={"ID"} id="ID" margin="dense" />
                  </Grid>
                  <Grid>
                    <TextField
                      label={"PASSWORD"}
                      id="PASSWORD"
                      margin="dense"
                    />
                  </Grid>
                </Grid>
                <Grid sx={{ marginLeft: 1 }}>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      width: "150px",
                      height: "125px",
                      fontSize: "1.8rem",
                    }}>
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
                  <Checkbox
                    defaultChecked
                    icon={<AddIcon />}
                    checkedIcon={<AddIconFill />}
                  />
                  <Typography
                    sx={{
                      color: "#4A4A49",
                      display: "inline",
                      fontSize: 15,
                    }}>
                    신뢰 Site 추가
                  </Typography>
                </Grid>
              </Grid>
              <Grid sx={{ paddingLeft: 1.5 }}>
                <Box
                  sx={{
                    color: "#4A4A49",
                    display: "inline",
                    fontSize: 15,
                  }}>
                  ※ 초기 비밀번호는 &nbsp;
                </Box>
                <Box
                  sx={{
                    color: "#1824FF",
                    display: "inline",
                    fontSize: 15,
                  }}>
                  kumhotire1! &nbsp;
                </Box>
                <Box
                  sx={{
                    color: "#4A4A49",
                    display: "inline",
                    fontSize: 15,
                  }}>
                  입니다.
                </Box>
              </Grid>
            </Grid>
            <Divider />
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
                sizes="100%"
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
