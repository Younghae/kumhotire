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
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center">
              <Grid item xs={3}>
                <Item>대분류</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>생산성 향상</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>수립일</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>부문</Item>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center">
              <Grid item xs={3}>
                <Item>중분류</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>Scrap 절감</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>시작일</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>팀</Item>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center">
              <Grid item xs={3}>
                <Item>소분류</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>Material(4M)</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>완료일</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>사번</Item>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center">
              <Grid item xs={3}>
                <Item>Idea명</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>""</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>효과금액 발생 기준일</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>작성자</Item>
              </Grid>
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item xs={4}>
              <Item>현황 및 문제점</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <TextField
                  id="filled-basic"
                  label="현황 및 문제점을 작성해주세요."
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
              <Item>
                <TextField
                  id="filled-basic"
                  label="Idea 개요(방안)을 작성해주세요."
                  variant="filled"
                  fullWidth
                  size="small"
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>선결과제</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <TextField
                  id="filled-basic"
                  label="선결과제를 작성해주세요."
                  variant="filled"
                  fullWidth
                  size="small"
                />
              </Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <Item>효과파악</Item>
          </Grid>
          <Grid>
            <Grid container direction="row">
              <Grid item xs={3}>
                <Item>예상 효과 금액</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>""</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>효과 기간</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>""</Item>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Grid container direction="row">
              <Grid item xs={3}>
                <Item>투자비</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>""</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>순수 효과 금액</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>""</Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <Item>산출근거</Item>
          </Grid>
          <Grid>
            <Grid>
              <Item>개선 전</Item>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={2}>
                <Item sx={{ height: "100%" }}>Key Factor</Item>
              </Grid>
              <Grid item xs={10}>
                <Grid container direction="row">
                  <Grid item xs={2}>
                    <Item>항목</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>단위</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>Baseline 효과</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>월 기준</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>Action 효과</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>Financial 효과</Item>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid container direction="row">
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid container direction="row">
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Grid>
              <Item>개선 후</Item>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={2} container direction="column">
                <Grid>
                  <Item>""</Item>
                </Grid>
                <Grid>
                  <Item sx={{ height: "75px" }}>Key Factor</Item>
                </Grid>
                <Grid>
                  <Item sx={{ height: "75px" }}>고정 Factor</Item>
                </Grid>
                <Grid>
                  <Item sx={{ height: "75px" }}>보조 Factor</Item>
                </Grid>
              </Grid>
              <Grid item xs={10}>
                <Grid container direction="row">
                  <Grid item xs={2}>
                    <Item>항목</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>단위</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>Baseline 효과</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>월 기준</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>Action 효과</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>Financial 효과</Item>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid container direction="row">
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid container direction="row">
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid container direction="row">
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid container direction="row">
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid container direction="row">
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid container direction="row">
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>""</Item>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Item>종합</Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
