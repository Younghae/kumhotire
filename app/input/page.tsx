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

const Item2 = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const daebunryu = [
  { label: "생산성 향상" },
  { label: "생산성 향상2" },
  { label: "생산성 향상3" },
];

const jungbunryu = [
  { label: "Scrap 절감" },
  { label: "Scrap 절감2" },
  { label: "Scrap 절감3" },
];

const sobunryu = [
  { label: "Material (4M)" },
  { label: "Material (4M)2" },
  { label: "Material (4M)3" },
];

export default function Input() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 0 }}>
        <Grid>
          <Grid container justifyContent="flex-start" alignItems="center">
            <Item2>
              <Image
                src="/logo.png"
                width={150}
                height={50}
                alt="kumhotire logo"
              />
            </Item2>
          </Grid>
          <Grid>
            <Grid>
              <Grid container direction="row">
                <Grid item xs={2}>
                  <Item>대분류</Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <Autocomplete
                      id="size-small-filled"
                      size="small"
                      options={daebunryu}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="filled"
                          label="대분류를 선택하세요"
                        />
                      )}
                    />
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>수립일</Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <TextField
                      id="filled-basic"
                      label="수립일을 작성해주세요."
                      variant="filled"
                      fullWidth
                      size="small"
                    />
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>부문</Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <TextField
                      id="filled-basic"
                      label="부문을 작성해주세요."
                      variant="filled"
                      fullWidth
                      size="small"
                    />
                  </Item>
                </Grid>
              </Grid>
              <Grid container direction="row">
                <Grid item xs={2}>
                  <Item>중분류</Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <Autocomplete
                      id="size-small-filled"
                      size="small"
                      options={jungbunryu}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="filled"
                          label="중분류를 선택하세요"
                        />
                      )}
                    />
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>시작일</Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <TextField
                      id="filled-basic"
                      label="시작일을 작성해주세요."
                      variant="filled"
                      fullWidth
                      size="small"
                    />
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>팀</Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <TextField
                      id="filled-basic"
                      label="팀을 작성해주세요."
                      variant="filled"
                      fullWidth
                      size="small"
                    />
                  </Item>
                </Grid>
              </Grid>
              <Grid container direction="row">
                <Grid item xs={2}>
                  <Item>소분류</Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <Autocomplete
                      id="size-small-filled"
                      size="small"
                      options={sobunryu}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="filled"
                          label="소분류를 선택하세요"
                        />
                      )}
                    />
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>완료일</Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <TextField
                      id="filled-basic"
                      label="완료일을 작성해주세요."
                      variant="filled"
                      fullWidth
                      size="small"
                    />
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>사번</Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <TextField
                      id="filled-basic"
                      type="number"
                      label="사번을 작성해주세요."
                      variant="filled"
                      fullWidth
                      size="small"
                    />
                  </Item>
                </Grid>
              </Grid>
              <Grid container direction="row">
                <Grid item xs={2}>
                  <Item>Idea명</Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <TextField
                      id="filled-basic"
                      label="idea를 작성해주세요."
                      variant="filled"
                      fullWidth
                      size="small"
                    />
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>효과금액 발생 기준일</Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <TextField
                      id="filled-basic"
                      label="효과금액 발생 기준일을 작성해주세요."
                      variant="filled"
                      fullWidth
                      size="small"
                    />
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>작성자</Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <TextField
                      id="filled-basic"
                      label="작성자를 작성해주세요."
                      variant="filled"
                      fullWidth
                      size="small"
                    />
                  </Item>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
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
                    multiline
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
                  <Item>
                    <TextField
                      id="filled-basic"
                      type="number"
                      label="예상 효과금액을 작성해주세요."
                      variant="filled"
                      fullWidth
                      size="small"
                    />
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>효과 기간</Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <TextField
                      id="filled-basic"
                      label="예상 효과 기간을 작성해주세요."
                      variant="filled"
                      fullWidth
                      size="small"
                    />
                  </Item>
                </Grid>
              </Grid>
            </Grid>
            <Grid>
              <Grid container direction="row">
                <Grid item xs={3}>
                  <Item>투자비</Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <TextField
                      id="filled-basic"
                      type="number"
                      label="투자비를 작성해주세요."
                      variant="filled"
                      fullWidth
                      size="small"
                    />
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>순수 효과 금액</Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <TextField
                      id="filled-basic"
                      type="number"
                      label="순수 효과 금액을 작성해주세요."
                      variant="filled"
                      fullWidth
                      size="small"
                    />
                  </Item>
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
                  <Item>Key Factor</Item>
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
                        <Item>
                          <TextField
                            id="filled-basic"
                            label="항목을 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="단위를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="Baseline효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="월 기준을 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="Action 효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="financial 효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Grid container direction="row">
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            label="항목을 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="단위를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="Baseline효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="월 기준을 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="Action 효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="financial 효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
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
                    <Grid>
                      <Item sx={{ height: "137px" }}>Key Factor</Item>
                    </Grid>
                    <Grid>
                      <Item sx={{ height: "137px" }}>고정 Factor</Item>
                    </Grid>
                    <Grid>
                      <Item sx={{ height: "137px" }}>보조 Factor</Item>
                    </Grid>
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
                      <Item>월기준</Item>
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
                        <Item>
                          <TextField
                            id="filled-basic"
                            label="항목을 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="단위를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="Baseline효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="월 기준을 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="Action 효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="financial 효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Grid container direction="row">
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            label="항목을 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="단위를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="Baseline효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="월 기준을 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="Action 효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="financial 효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Grid container direction="row">
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            label="항목을 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="단위를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="Baseline효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="월 기준을 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="Action 효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="financial 효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Grid container direction="row">
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            label="항목을 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="단위를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="Baseline효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="월 기준을 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="Action 효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="financial 효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Grid container direction="row">
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            label="항목을 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="단위를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="Baseline효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="월 기준을 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="Action 효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="financial 효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Grid container direction="row">
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            label="항목을 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="단위를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="Baseline효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="월 기준을 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="Action 효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <TextField
                            id="filled-basic"
                            type="number"
                            label="financial 효과를 입력해주세요."
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                        </Item>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={3.65}>
                <Item>종합</Item>
              </Grid>
              <Grid item xs={8.35} container direction="row">
                <Grid item xs={2.4}>
                  <Item>
                    <TextField
                      id="filled-read-only-input"
                      type="number"
                      defaultValue="0000"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="filled"
                    />
                  </Item>
                </Grid>
                <Grid item xs={2.4}>
                  <Item>
                    <TextField
                      id="filled-read-only-input"
                      type="number"
                      defaultValue="0001"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="filled"
                    />
                  </Item>
                </Grid>
                <Grid item xs={2.4}>
                  <Item>
                    <TextField
                      id="filled-read-only-input"
                      type="number"
                      defaultValue="0002"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="filled"
                    />
                  </Item>
                </Grid>
                <Grid item xs={2.4}>
                  <Item>
                    <TextField
                      id="filled-read-only-input"
                      type="number"
                      defaultValue="0003"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="filled"
                    />
                  </Item>
                </Grid>
                <Grid item xs={2.4}>
                  <Item>
                    <TextField
                      id="filled-read-only-input"
                      type="number"
                      defaultValue="0004"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="filled"
                    />
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
