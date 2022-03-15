import React from 'react'
import { Container, Row, Col, Button ,Card} from 'react-bootstrap'
import './chatbot.css'
import { MdArrowForwardIos } from 'react-icons/md'
import { BsFillPlayFill } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { GrEdit } from 'react-icons/gr'
import Chatbot from '../images/chatbot.png'
import Add from '../images/Add.png'
import Agent from '../images/agent.png'
import Copy from '../images/copy.png'
import Delete from '../images/delete.png'
import Count from '../images/01.png'
import Edit from '../images/edit.png'
import Mobile from '../images/mobile.png'





const ChatBotcard = () => {
  return (
    <div> <Card style={{  background: '#32be8a4d' }} className='Home-card'  >
    <Card.Body>
      <Card.Title> 
        
        
        <div className='ajhv'>
        
      <div> <BsFillPlayFill style={{color:'#00784B'}}  />Ajhvx </div>     <div>    <img
                src={Count}
                alt="Girl in a jacket"
                width="24"
                height="24"
                className="chatbot-img"
              /> </div>  </div> </Card.Title> 
      <Card.Subtitle className="mb-2 text-muted pt-2">  <img
                src={Agent}
                alt="Girl in a jacket"
                width="13"
                height="18"
                className="chatbot-img"
              />   Chat agent</Card.Subtitle> 
              <br/> 
    <Row> 
      <Col lg={4} md={4} sm={2} xs={2}>   <Card.Link href="#"><img
                src={Copy}
                alt="Girl in a jacket"
                width="60"
                height="60"
                className="chatbot-img"
              /></Card.Link></Col>
  
  
  <Col lg={4} md={4} sm={2} xs={2}>      <Card.Link href="#"><img
                src={Edit}
                alt="Girl in a jacket"
                width="60"
                height="60"
                className="chatbot-img"
              /></Card.Link></Col>
  <Col lg={4} md={4} sm={2} xs={2}> <Card.Link href="#"><img
                src={Delete}
                alt="Girl in a jacket"
                width="60"
                height="60"
                className="chatbot-img-delete"
              /></Card.Link></Col>
  
  
    </Row>
   
    
    
  
  
  
    </Card.Body> 
  </Card></div>
  )
}

export default ChatBotcard