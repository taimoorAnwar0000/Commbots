import React from 'react'
import { Col, Container,Row,Form, Button } from 'react-bootstrap'
import CardProfile from '../images/cardprofile.png'
import './chatcenter.css'
import Date from '../images/dategroup.png'
import { BsShare } from 'react-icons/bs';
import { ImAttachment } from 'react-icons/im';
import { AiOutlineFile } from 'react-icons/ai';
// import { IoReturnUpForwardSharp } from 'react-icons/Io';
import { MdPersonOutline } from 'react-icons/md';







const Chat = () => {
  return (

<div>

    <div  className='ChartCard'>

    <div >
    <img src={CardProfile} alt="Girl in a jacket" width="100" height="100"/>
    
    </div>
    <div className='profile-text' >
      <div className='MM-clothing'>
    
       <div> <h6>Robert Fox</h6> </div>  <div  className='mmtext' >MM Clothing</div></div>
        
        <h6>Draft1-changes-in.red-from-</h6>
    </div>
    
    <div className='date2' >
     <div className='switch'>
     <div><Form>
  <Form.Check 
    type="switch"
    id="custom-switch"
    
  />
  </Form></div>   
     <div>
         
         
         <Button  className='button'  > Closed  </Button>
             </div>  </div> 

 <div> <MdPersonOutline/> <AiOutlineFile className='icon'/> <ImAttachment  className='icon'/><BsShare  className='icon' /> </div>  </div>
    
<hr></hr>


 </div>
 
 
 <div className='bell'>  
    
    <div  className='name' > Jerome Bell </div>
    <div  className='name' >Cameron</div>
    <div  className='name' >Phyllis Gol.. </div>
     
    
     </div>
 
 </div>
  )
}

export default Chat