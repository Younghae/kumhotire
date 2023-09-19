"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { StringLiteral } from "typescript";
import { AbsoluteString } from "next/dist/lib/metadata/types/metadata-types";

import MyIdea from "../../Interface/MyIdea";
import Box from "@mui/material/Box";

export default function MyIdea() {
  // const getMyIdea = await fetch("http://localhost:8000/MyIdea");
  // const MyIdeadata = await getMyIdea.json();
  // console.log(MyIdeadata);

  const [myIdea, setMyIdea] = useState<MyIdea[]>([]);
  useEffect(() => {
    async function fetchData() {
      // console.log(process.env.SERVER_BASE_URL);
      const response = await fetch(`${process.env.SERVER_BASE_URL}/MyIdea`);
      // const response = await fetch("http://localhost:8000/MyIdea");
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
        // <li key={index}>
        <Box key={index}>{idea.name}</Box>
        // </li>
        // console.log(idea.Name);
      ))}
    </Container>
  );
}
