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
import Reset from '../images/reset.png'

import ChatBotcard from './ChatBotcard'









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
          <Col lg={10} md={10} sm={8} xs={10} className="chatbot-img-text">
            <img
              src={Chatbot}
              alt="Girl in a jacket"
              width="48"
              height="38"
              className="chatbot-img"
            />{' '}
            <span className="chatbot-icon-text"> Chatbots</span>
          </Col>
          <Col lg={2}  md={2} sm={2}xs={2} >
            <Button className="add-button"   style={{  background: '#32be8a4d' }} >
              <img src={Add} alt="Girl in a jacket" width="18" height="18" />
              Add New
            </Button>
          </Col>
        </Row>
        <Row>
          <Col lg={8} md={12} sm={12} xs={12}>

        <div className='d-flex mt-4  chatbottext '  ><h6>Main Bots</h6> <    h4  className='Linked'  >Linked Bots</h4></div>
          

            <Row>  <hr/>
              
           <Col className='mt-2'lg={4} md={6} sm={12}><ChatBotcard/></Col>
           <Col className='mt-2' lg={4} md={6} sm={12}><ChatBotcard/></Col>
           <Col className='mt-2' lg={4} md={6} sm={12}><ChatBotcard/></Col>
           <Col   className='mt-2' ><ChatBotcard/></Col>
              <Col lg={4} md={6} sm={12} className='mt-2'><ChatBotcard/></Col>
              <Col lg={4} md={6} sm={12} className='mt-2'><ChatBotcard/></Col>
              <Col className='mt-2'lg={4} md={6} sm={12}><ChatBotcard /></Col>
           <Col className='mt-2'lg={4} md={6} sm={12}><ChatBotcard/></Col>
           <Col className='mt-2'lg={4} md={6} sm={12}><ChatBotcard/></Col>

              
                </Row>
                {/* <Row className='mt-3'>  
              
              <Col lg={4} md={6} sm={12}><ChatBotcard/></Col>
              <Col lg={4} md={6} sm={12}><ChatBotcard/></Col>
              <Col lg={4} md={6} sm={12}><ChatBotcard/></Col>
   
   
                 
                   </Row>

             <Row className='mt-3'>  
              
           <Col><ChatBotcard/></Col>
           <Col><ChatBotcard/></Col>
           <Col><ChatBotcard/></Col>


              
                </Row> */}
              
           

          
          </Col>
          <Col lg={4} md={12} sm={12} xs={12}  >
            
            <div>

            <img
              src={Mobile}
              alt="Girl in a jacket"
              width="365"
              height="737"
              className="chatbot-img py-5 px-3 "
            />


            </div>
         
<div    className='phone-button'  >
<div > <Button style={{background: '#0061BB' ,width:'100px' ,height:'40px' ,color:'black'
}}>

<img
              src={Edit}
              alt="Girl in a jacket"
              width="24"
              height="24 "
              // className="chatbot-img py-5 px-3 "
            /> Edit
</Button  >   </div>

 <div >


 <Button  style={{background: 'white' ,width:'100px',height:'40px',color:'black',border:'none'
}}    >

<img
              src={Reset}
              alt="Girl in a jacket"
              width="22"
              height="18 "
              className="chatbot-img "
            /> Reset
</Button>



 </div>


        
       
</div>
   

            
            
            
            
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ChatBot
