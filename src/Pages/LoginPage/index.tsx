import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [userKey, setUserKey] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserKey(e.target.value);
  };

  const handleSaveClick = () => {
    axios
      .get(`https://api-football-v1.p.rapidapi.com/v3/timezone`, {
        headers: {
          "X-RapidAPI-Key": userKey,
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
      })
      .then(() => {
        localStorage.setItem("userKey", userKey);
        console.log("eoa");
        navigate("/home");
      })
      .catch((e) => {
        setError(e.response.data.message);
      });
  };

  return (
    <>
      <input type="text" value={userKey} onChange={handleInputChange}></input>
      <button onClick={handleSaveClick}>Sign In</button>
      <p style={{ color: "red" }}>{error}</p>
    </>
  );
}

export default LoginPage;
