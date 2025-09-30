import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = "http://localhost:5000/products";
    let response = await fetch(url);
    let data = await response.json();
    console.log("dddd", data);
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Container>
        {productList.map((menu) => (
          <Col lg={3} key={menu.id}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Container>
    </div>
  );
};

export default ProductAll;
