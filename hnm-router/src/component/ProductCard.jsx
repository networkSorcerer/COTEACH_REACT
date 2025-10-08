import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div style={{ padding: "10px" }}>
      <img
        src={item?.img}
        alt={item?.title}
        style={{ width: "100%", objectFit: "cover" }}
      />
      <div>Conscious choice</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
