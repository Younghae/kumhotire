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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const Lag = [
  { label: "한국어", language: "korean" },
  { label: "English", language: "english" },
];

const Login = () => {
  return (
    <Box
      justifyContent="space-between"
      // sx={{ border: 1, borderColor: "grey.400", borderRadius: "5px" }}
      ml={20}
      mt={10}
      style={{ width: "60%", height: "100%" }}
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
          <Grid item xs={9.5}>
            {/* <Item> */}
            <Link href="/">
              <Image src="/logo.png" width={150} height={50} alt="" />
            </Link>
            {/* </Item> */}
          </Grid>
          <Grid item xs={2.5}>
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
          border: 1,
          borderColor: "grey.400",
          borderRadius: "8px",
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
          <Grid item xs={6}>
            {/* <Item> */}
            <Grid container direction={"column"} sx={{ ml: 2, mt: 4 }}>
              <Grid item xs={2}>
                {/* <Item> */}
                <Typography
                  sx={{ fontWeight: "bold" }}
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
              <Grid item xs={6}>
                <Grid container direction={"row"} justifyContent="flex-start">
                  <Grid item xs={8}>
                    {/* <Item> */}
                    <TextField label="id" fullWidth={true} />
                    {/* </Item> */}
                    {/* <Item> */}
                    <Box
                      sx={{
                        mt: 1,
                      }}
                    ></Box>
                    <TextField
                      label="password"
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
                  sx={{
                    mt: 2,
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
          <Grid item xs={6}>
            {/* <Item> */}
            <Image
              src="/kumhoimg.png"
              width={400}
              height={370}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            {/* </Item> */}
          </Grid>
          {/* </Item> */}
        </Grid>

        {/* </Grid> */}
      </Box>
    </Box>
  );
};

export default Login;
