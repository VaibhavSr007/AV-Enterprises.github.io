import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import {Link} from 'react-router-dom'
import img from './logo.png';
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  
  const handleClick = async (e) => {
    e.preventDefault();
    await login(dispatch, { username, password });
    window.location.replace('http://localhost:3000/');
  };


  return (
    <div
      style={{
        background: 'linear-gradient(to right, #4ca1af, #c4e0e5)',
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img style={{width: '120px', borderRadius: '50%', marginBottom: '12px'}} src={img} alt="" />
      <h1 style={{marginBottom: '40px', fontSize: '50px', fontWeight: '5'}}>Welcome to AV Enterprises Admin website</h1>
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width:100 }}>
        Login
      </button>
    </div>
  )
}
