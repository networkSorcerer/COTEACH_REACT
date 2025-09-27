import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">GO TO ABOUT PAGE</Link>
    </div>
  );
};

export default HomePage;
