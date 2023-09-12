"use client";

import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default async function MyIdea() {
  const getMyIdea = await fetch("http://localhost:8000/MyIdea");
  const MyIdeadata = await getMyIdea.json();
  console.log(MyIdeadata);

  const [MyIdea, setMyIdea] = useState([]);
  setMyIdead(MyIdea.MyIdea);

  return (
    <Container maxWidth="xl" sx={{ border: "1px solid" }}>
      {MyIdeadata.map((item) => (
        <Typography variant="h1">{item.Date}</Typography>
      ))}
    </Container>
  );
}
