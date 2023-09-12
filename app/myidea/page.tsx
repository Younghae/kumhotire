"use client";

import * as React from "react";
import Container from "@mui/material/Container";

export default async function MyIdea() {
  const getMyIdea = await fetch("http://localhost:8000/MyIdea");
  const MyIdeadata = await getMyIdea.json();
  console.log(MyIdeadata);

  return (
    <Container maxWidth="xl" sx={{ border: "1px solid" }}>
      <div>이규례</div>
    </Container>
  );
}
