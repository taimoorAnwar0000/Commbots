import React from "react";
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
  return (
    <div className="ChartCard">
      <div>
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
            {" "}
            <h6>{props.name}</h6>{" "}
          </div>{" "}
          <div className="mmtext">MM Clothing</div>
        </div>

        <h6 className="chat_card_heading">{props.text}</h6>
      </div>

      <div className="date">
        {" "}
        <div className='hhh'>
          {" "}
          <KeyboardArrowDownIcon className="hover_arrow" />{" "}
        </div>{" "}
        11/02/22{" "}

        <div className="bbb">
        <img src={Date} alt="Girl in a jacket" width="60" height="30" />

          <div className="hover_icon">
            <BsArrow90DegRight style={{ color: "#F8D418" }} />
            <MdPersonOutline /> <AiOutlineFile />
            <MdOutlineBookmarkBorder />
            <ImAttachment />
            <BsShare />
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default ChartCard;
