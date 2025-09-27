import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const GoToHomePage = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={GoToHomePage}>GO TO HOME PAGE</button>
    </div>
  );
};

export default AboutPage;
