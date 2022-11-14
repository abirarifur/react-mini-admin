import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    login(dispatch, { username, password });
  }
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: "10px", marginBottom: "20px" }}
        type="text"
        placeholder="user name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: "10px", marginBottom: "20px" }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{ padding: 10, width: "100px" }} onClick={handleClick}>
        Login
      </button>
    </div>
  );
}
