import React from "react";
import { Link, useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/products?q=pants");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">GO TO ABOUT PAGE</Link>
      <button onClick={goProductPage}>GO TO PRODUCT PAGE</button>
    </div>
  );
};

export default HomePage;
