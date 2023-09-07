"use client";
import * as React from "react";
import Container from "@mui/material/Container";

async function MyIdeaData() {
  const response = await fetch("http://localhost:8000/MyIdea");
  const MyIdeas = await response.json();
  console.log(MyIdeas);
}

const MyIdea = () => {
  return (
    <Container maxWidth="xl" sx={{ border: "1px solid" }}>
      <MyIdeaData />
    </Container>
  );
};

export default MyIdea;
