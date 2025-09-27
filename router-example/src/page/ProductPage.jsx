import React from "react";
import { useSearchParams } from "react-router-dom";
const ProductPage = () => {
  let [query, setQuery] = useSearchParams();
  console.log("qqqq", query.get("q"));
  return (
    <div>
      <h1>SHOW ALL PRODUCTS</h1>
    </div>
  );
};

export default ProductPage;
