"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import MyIdea from "../../Interface/MyIdea";
import Box from "@mui/material/Box";

export default function MyIdea() {
  const [myIdea, setMyIdea] = useState<MyIdea[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${process.env.SERVER_BASE_URL}/MyIdea`);
      const json = await response.json();
      console.log(json);
      setMyIdea(json);
    }
    fetchData();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ border: "1px solid" }}>
      <div>이규례</div>
      {myIdea.map((idea, index) => (
        <Box key={index}>{idea.name}</Box>
      ))}
    </Container>
  );
}
