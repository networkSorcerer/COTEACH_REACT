import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
