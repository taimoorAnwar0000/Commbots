import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardProfile from "../images/cardprofile.png";
import "./chatcenter.scss";
import { BsArrow90DegRight } from "react-icons/bs";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { ImAttachment } from "react-icons/im";
import { AiOutlineFile } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { MdPersonOutline } from "react-icons/md";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Date from "../images/dategroup.png";
const ChartCard = (props) => {
  const [iconshow, setIconShow] = useState(false);
  const EnterMouse = () => {
    setIconShow(true);
  };
  return (
    <div className="ChartCard">
      <div className="img1">
        <img
          className="chat_card_img"
          src={props.image}
          alt="Girl in a jacket"
          width="100"
          height="100"
        />
      </div>
      <div className="profile-text">
        <div className="MM-clothing">
          <div className="chat_card_heading">
            <h6>{props.name}</h6>
          </div>
          <div className="mmtext">MM Clothing</div>
        </div>

        <h6 className="chat_card_heading">{props.text}</h6>
      </div>

      <div className="date">
        <div className="hhh">
          <KeyboardArrowDownIcon
            onMouseEnter={EnterMouse}
            onMouseLeave={() => {
              setIconShow(false);
            }}
          />
        </div>
        <span className="date-text">11/02/22</span>

        <div className="bbb">
          <img src={Date} alt="Girl in a jacket" width="60" height="30" />
        </div>
      </div>

      <div className={iconshow === true ? "hover_icon" : "hover_icon1"}>
        <BsArrow90DegRight style={{ width: "20px", height: "20px" }} />
        <MdPersonOutline style={{ width: "20px", height: "20px" }} />{" "}
        <AiOutlineFile style={{ width: "20px", height: "20px" }} />
        <MdOutlineBookmarkBorder style={{ width: "20px", height: "20px" }} />
        <ImAttachment style={{ width: "20px", height: "20px" }} />
        <BsShare style={{ width: "20px", height: "20px" }} />
      </div>
    </div>
  );
};

export default ChartCard;
