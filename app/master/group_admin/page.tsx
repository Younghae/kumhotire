"use client";
import {useEffect, useState} from 'react'

const Group_admin = () => {
  const [name, setName] =  useState("");
  useEffect(() => {
    async function fecthData() {
    let response = await fetch("http://localhost:8000/User");
    const data = await response.json();
    setName(data.name);
    }
    fecthData();
  },[])
  return (
    <div>
   <h1>
    {name as string} 입니다.</h1>
    </div>
  )
}

export default Group_admin;
