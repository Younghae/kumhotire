"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import { forEachLeadingCommentRange } from "typescript";

const FindId = () => {
  const [query, setQuery] = useState("");
  const [matchedUser, setMatchedUser] = useState<any | null>(null);

  const handleSubmit = async (e: any) => {
    let result = true;
    if (query === "" || query === null) {
      result = false;
      alert("사번을 입력해주세요");
    }
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/User?query=${query}`);
    const fetchedUsers = await response.json();
    const user = fetchedUsers.find((user: any) => user.emid === query);
    setMatchedUser(user);

    // console.log(user);
  };

  // const validate = () => {
  //   let result = true;
  //   if (query === "" || query === null) {
  //     result = false;
  //     alert("사번을 입력해주세요");
  //   }

  //   return result;
  // };

  return (
    <Container maxWidth="xl">
      <Box display={"inline-block"} alignItems={"center"}>
        <Box component="form" border={1} onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                아이디찾기
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>사번을입력해주세요</Typography>
              <TextField
                color="primary"
                focused
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ maxWidth: "30px", maxHeight: "100px" }}>
                찾기
              </Button>
            </Grid>
          </Grid>
        </Box>

        {matchedUser && (
          <Box mt={3} border={1} p={2}>
            <Typography>
              {matchedUser.name} 님의 아이디는 {matchedUser.id} 입니다.
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default FindId;
