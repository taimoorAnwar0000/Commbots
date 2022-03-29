import React, { useState, useEffect } from "react";

import Chat250 from "../images/250.png";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../Sidebar/Sidebar";

import { Container, Row, Col } from "react-bootstrap";
import "./chatcenter.scss";

const ChatCenter250 = (props) => {
  return (
    <div className="w-100">
      <div
        className={props.state == false ? "chatbotmainclass" : "chatbotmain2"}
      >
        <Container>
          <Row>
            <Col lg={10} md={10} sm={10} xs={10}>
              <div className="d-flex  chatcenter  ">
                {/* <GiHamburgerMenu
                  className="sidebaricon"
                  onClick={() => {
                    props.setState(!props.state);
                  }}
                /> */}
                <h6>Chat Center</h6>
                <div className="chat250image">
                  <img src={Chat250} alt="Girl in a jacket" />
                </div>
              </div>
              <br />
            </Col>
            <Col className="three_dots" lg={2} md={2} sm={2} xs={2}>
              <HiOutlineDotsVertical />{" "}
            </Col>
          </Row>
          <div>
            <input placeholder="Search" className="form-control" />
          </div>
        </Container>

        <div></div>
      </div>
    </div>
  );
};

export default ChatCenter250;
