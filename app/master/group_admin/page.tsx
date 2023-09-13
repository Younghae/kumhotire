"use client";

import { Post }  from "@/lib/types"
import { useState, useEffect } from "react";


export default function Group_admin() {
const [data,setData] = useState<Post[]>([]);

useEffect(() => {
  async function fetchData() {
    const response = await fetch("http://localhost:8000/User")
    const data = await response.json();
    setData(data);
  }
fetchData()
},[])


  return (
    <div >
      <h1>이름</h1>
      <ul>
        {data.map((post) => (
          <div>
          <li key={post.id}>{post.Name}</li>
          </div>
        ))}
      </ul>
    </div>
  );

        }
