"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import CheckBox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { styled } from "@mui/material";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "start",
}));
const Login = () => {
  return (
    <Box
      display="flex"
      justifyItems="center"
      alignItems="center"
      sx={{
        ml: 20,
        mt: 10,
        width: "75%",
        height: "50%",
      }}
    >
      <Grid container direction="column">
        <Grid item>
          <Item>
            <Image src="/logo.png" width={100} height={40} alt="" />
          </Item>

          <Grid item>
            <Item>
              <Box
                sx={{
                  // pl: 3,
                  // pt: 4,
                  display: "flex",
                  justifyItems: "flex-start",
                  alignItems: "center",
                  border: "1px solid grey",

                  borderRadius: "8px",
                }}
              >
                <Grid container direction="row">
                  <Grid item xs={6}>
                    <Item>
                      <Box
                        display="flex"
                        justifyItems="flex-start"
                        alignItems="start"
                        sx={
                          {
                            // pl: 3,
                            // pt: 4,
                            // border: "1px solid grey",
                            // width: "75%",
                            // height: "50%",
                            // borderRadius: "8px",
                          }
                        }
                      >
                        <Grid container direction="column">
                          <Grid item xs={12}>
                            <Item>
                              <Typography
                                sx={{ fontWeight: "bold" }}
                                component="div"
                              >
                                <span style={{ color: "#ff0000" }}>T</span>CI
                                &nbsp;
                                <span style={{ color: "#ff0000" }}>T</span>otal
                                &nbsp;
                                <span style={{ color: "#ff0000" }}>M</span>
                                onitoring &nbsp;
                                <span style={{ color: "#ff0000" }}>S</span>ystem
                              </Typography>
                            </Item>
                            <Box
                              sx={{
                                // pl: 3,
                                // pt: 4,
                                display: "flex",
                                justifyItems: "flex-start",
                                alignItems: "center",
                                // border: "1px solid grey",

                                // borderRadius: "8px",
                              }}
                            >
                              <Grid container direction="row">
                                <Grid item xs={8}>
                                  <Item>
                                    <Grid container direction="column">
                                      <Grid item xs={12}>
                                        <Item>
                                          <TextField label="id" />
                                        </Item>
                                        <Item>
                                          <TextField
                                            label="password"
                                            type="password"
                                          />
                                        </Item>
                                      </Grid>
                                    </Grid>
                                  </Item>
                                </Grid>
                                <Grid item xs={4}>
                                  <Item>
                                    <Button
                                      type="submit"
                                      variant="contained"
                                      color="secondary"
                                      sx={{ height: 100 }}
                                    >
                                      로그인
                                    </Button>
                                  </Item>
                                </Grid>
                              </Grid>
                            </Box>
                            <Box
                              sx={{
                                // pl: 3,
                                // pt: 4,
                                display: "flex",
                                justifyItems: "flex-start",
                                alignItems: "center",
                                // border: "1px solid grey",

                                // borderRadius: "8px",
                              }}
                            >
                              <Grid container direction="column">
                                <Grid item xs={12}>
                                  <Item>
                                    <FormControlLabel
                                      control={<CheckBox value="rememberid" />}
                                      label="아이디 저장"
                                    />
                                  </Item>
                                </Grid>

                                <Grid item xs={12}>
                                  <Item>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        justifyItems: "space-around",
                                        // alignItems: "center",
                                      }}
                                    >
                                      <Grid container direction="row">
                                        <Grid item xs={12}>
                                          <Item>
                                            <Button
                                              href="/"
                                              variant="outlined"
                                              startIcon={<SearchIcon />}
                                            >
                                              비밀번호 찾기
                                            </Button>
                                            <Button
                                              href="/"
                                              variant="outlined"
                                              startIcon={<LockIcon />}
                                            >
                                              비밀번호 변경
                                            </Button>
                                          </Item>
                                        </Grid>
                                      </Grid>
                                    </Box>
                                  </Item>
                                </Grid>
                              </Grid>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <Image
                        src="/kumhoimg.jpg"
                        width={300}
                        height={300}
                        alt=""
                      />
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
