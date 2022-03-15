import React from "react";
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

const ChatCenter = () => {
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

  return (
    <div className="mainCHat">
      <Container fluid>
        <Row>
          <Col lg={4} md={12} sm={12}>
            <div>
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

          <Col lg={8} md={12} sm={12}>
            <Chat />
          </Col>
       
        </Row>




      </Container>
    </div>
  );
};

export default ChatCenter;
