import React from "react";
import { Col, Row } from "react-bootstrap";
import myImg from "../images/KakaoTalk_20250407_184228063.png";
const ContactItem = ({ item }) => {
  return (
    <div>
      <Row>
        <Col lg={2}>
          <img width={50} src={myImg} />
        </Col>
        <Col lg={10}>
          <div>{item.name}</div>
          <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
