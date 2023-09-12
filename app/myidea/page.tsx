"use client";
import * as React from "react";
import Container from "@mui/material/Container";

async function MyIdeaData() {
  const response = await fetch("http://localhost:8000/MyIdea");
  const MyIdeas = await response.json();
  console.log(MyIdeas);
  return {
    props: {
      MyIdeas,
    },
  };
}

const MyIdea = () => {
  return (
    <Container maxWidth="xl" sx={{ border: "1px solid" }}>
      {response.json}
    </Container>
  );
};

export default MyIdea;
