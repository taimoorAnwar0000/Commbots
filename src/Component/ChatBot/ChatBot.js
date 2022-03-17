import React from 'react'
import { Container, Row, Col, Button ,Card} from 'react-bootstrap'
import './chatbot.scss'
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
import { Link } from 'react-router-dom'


const ChatBot = (props) => {
  
 
console.log(props.flag)

  return (

   <div className="main_chat_bot">

    <div className={props.state==false?' chatbotmainclass':'chatbotmain2'}  >
       {/* <Link>dddd</Link> */}
      <Container fluid className='mt-3'>
        <Row>

          <span className="chat-bot-Row1">
            
            <h6> Home </h6> <MdArrowForwardIos className="mt-2" />
            <h6> Setting </h6> <MdArrowForwardIos className="mt-2" />
            <h4> Chatbot </h4>
          </span>
        </Row>

        <Row className="chat-bot-row2">
          <div className="chatbot-img-text">
            <div className="aroundit">
            <img
              src={Chatbot}
              alt="Girl in a jacket"
              width="50"
              height="50"
              className="chatbot-img"
            />
            <span className="chatbot-icon-text"> Chatbots</span></div>
        
          <div >
            <button className="add-button"   style={{  background: '#32be8a4d', color: 'white'}} >
              <img src={Add} alt="Girl in a jacket" width="18" height="18" />
              Add New
            </button>
          </div></div>
        </Row>
        <div className="giving_it">
        <Row>




          <Col lg={8} md={12} sm={12} xs={12}>
<div className="khan">

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
               
</div>
          </Col>

        
          <Col lg={4} md={12} sm={12} xs={12}  >
            <div className='mobile-portion'>
            <div  className='message-preview' >Message Preview</div>
            <div  className='mobile-pic'>

            <img
              src={Mobile}
              alt="Girl in a jacket"
              
              className="chatbot-img-mobile py-5  " />
  </div>
         
<div    className='phone-button'  >
<div > <button className='edit-button' style={{background: '#0061BB' ,width:'100px' ,height:'40px' ,color:'black'}}>

<img
src={Edit}
              alt="Girl in a jacket"
              width="24"
              height="24 "
            
            /> Edit
</button >   

</div>

 <div >


 <button className='reset-button'  style={{background: 'white' ,width:'100px',height:'40px',color:'black',border:'none'
}}    >

<img
              src={Reset}
              alt="Girl in a jacket"
              width="22"
              height="18 "
              className="chatbot-img "
            /> Reset
</button>



 </div>


        
       
</div>
</div>

            
            
            
            
            </Col>
        </Row>
        </div>
      </Container>
      </div>
   
    </div>
  )
}

export default ChatBot
