"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import TextField from "@mui/material/TextField";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Input() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid>
        <Grid container justifyContent="flex-start" alignItems="center">
          <Item>
            <Image
              src="/logo.png"
              width={150}
              height={50}
              alt="kumhotire logo"
            />
          </Item>
        </Grid>
        <Grid>
          <Grid>
            <Item>2</Item>
          </Grid>
          <Grid container>
            <Grid item xs={4}>
              <Item>현황 및 문제점</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <TextField
                  id="filled-basic"
                  label="현황 및 문제점"
                  variant="filled"
                  fullWidth
                  size="small"
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>Idea 개요(방안)</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>2-2</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>선결과제</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>2-2</Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Item>3</Item>
        </Grid>
        <Grid>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
