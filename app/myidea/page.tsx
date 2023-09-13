"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { StringLiteral } from "typescript";
import { AbsoluteString } from "next/dist/lib/metadata/types/metadata-types";

export default interface MyIdea {
  Em_Id: string;
  Name: string;
  Idea: string;
  Effect: string;
  Dept: string;
  Office: string;
  Team: string;
  Status: string;
  Stage: string;
  Date: string;
}

export default function MyIdea() {
  // const getMyIdea = await fetch("http://localhost:8000/MyIdea");
  // const MyIdeadata = await getMyIdea.json();
  // console.log(MyIdeadata);

  const [myIdea, setMyIdea] = useState<MyIdea[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/MyIdea");
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
        <li key={index}>
          <div>{idea.Name}</div>
        </li>
        // console.log(idea.Name);
      ))}
    </Container>
  );
}
