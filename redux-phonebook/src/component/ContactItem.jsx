import React from "react";
import { Col, Row } from "react-bootstrap";
import myImg from "../images/KakaoTalk_20250407_184228063.png";
const ContactItem = () => {
  return (
    <div>
      <Row>
        <Col lg={2}>
          <img width={50} src={myImg} />
        </Col>
        <Col lg={10}>
          <div>김요한</div>
          <div>01090000000</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
