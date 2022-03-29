import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import ChatCenter250 from "./ChatCenter250";
import ChatBotcard from "../ChatBot/ChatBotcard";
import ChartCard from "./ChartCard";
import Chat from "./Chat";
import Date from "../images/dategroup.png";
import CardProfile from "../images/cardprofile.png";
import P1 from "../images/p1.png";
import P2 from "../images/p2.png";
import P3 from "../images/p3.png";
import "./chatcenter.scss";
import { GiHamburgerMenu } from "react-icons/gi";

import Sidebar from "../Sidebar/Sidebar";

const ChatCenter = (props) => {
  // const [flag, setFlag] = useState(true);

  console.log("ddddasdsa", props.state);
  const array = [
    { image: CardProfile, name: "Robert Fox", text: "Draft1-changes-red" },
    { image: P1, name: "Jerome Bell", text: "Draft1-changes-red" },
    { image: P2, name: "Cameron W..", text: "Draft1-changes-red" },
    { image: P3, name: "Phyllis Godi", text: "Draft1-changes-red" },
    { image: CardProfile, name: "Robert Fox", text: "Draft1-changes-red" },
    { image: P1, name: "Jerome Bell", text: "Draft1-changes-red" },
    { image: P2, name: "Cameron W..", text: "Draft1-changes-red" },
    { image: P3, name: "Phyllis Godi", text: "Draft1-changes-red" },
  ];
  useEffect(() => {}, [props.state]);
  return (
    <div className="w-100" style={{ width: "100%" }}>
      {/* <Sidebar flag={flag} /> */}
      <div
        className={props.state == false ? "chatbotmainclass" : "chatbotmain2"}
      >
        <div className="mainCHat">
          <Container fluid>
            <Row>
              <Col lg={4} md={12} sm={12}>
                <div className="d-flex">
                  <GiHamburgerMenu
                    className="sidebaricon"
                    style={{ marginTop: "0px" }}
                    onClick={() => {
                      // setFlag(!flag);
                      props.setState(!props.state);
                    }}
                  />
                  <ChatCenter250 />
                </div>

                <div className="chat-card-main">
                  {array.map((item) => {
                    return (
                      <div className="all-card">
                        <ChartCard
                          image={item.image}
                          name={item.name}
                          text={item.text}
                        />{" "}
                      </div>
                    );
                  })}
                </div>
              </Col>

              <Col
                lg={8}
                md={12}
                sm={12}
                style={{ height: "80vh", position: "relative" }}
              >
                <Chat state={props.state} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ChatCenter;
