import React from 'react'
import { Container, Row, Col, Button ,Card} from 'react-bootstrap'
import './chatbot.css'
import { MdArrowForwardIos } from 'react-icons/md'
import { BsFillPlayFill } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { GrEdit } from 'react-icons/gr'
import Chatbot from '../images/chatbot.png'
import Add from '../images/Add.png'




const ChatBot = () => {
  return (
    <div>
      <Container>
        <Row>
          <span className="chat-bot-Row1">
            
            <h6> Home </h6> <MdArrowForwardIos className="mt-2" />
            <h6> Setting </h6> <MdArrowForwardIos className="mt-2" />
            <h4> Chatbot </h4>
          </span>
        </Row>

        <Row className="chat-bot-row2">
          <Col lg={10} className="chatbot-img-text">
            <img
              src={Chatbot}
              alt="Girl in a jacket"
              width="48"
              height="38"
              className="chatbot-img"
            />{' '}
            <span className="chatbot-icon-text"> Chatbots</span>
          </Col>
          <Col lg={2}>
            <Button className="add-button">
              <img src={Add} alt="Girl in a jacket" width="18" height="18" />
              Add New
            </Button>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <h2> Main Bots</h2> <hr />



            <Card style={{ width: '18rem' }} className='Home-card'  >
  <Card.Body>
    <Card.Title> <BsFillPlayFill style={{color:'#00784B'}}  />  Ajhvx</Card.Title>
    <Card.Subtitle className="mb-2 text-muted pt-2">Chat agent</Card.Subtitle>
  
    <Card.Link href="#"><RiDeleteBin6Line  style={{color:'#D91D00'}}  /></Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default ChatBot
