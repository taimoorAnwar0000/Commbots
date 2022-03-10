import React from 'react'

import Chat250 from '../images/250.png'
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { Container ,Row,Col} from 'react-bootstrap';
import './chatcenter.css'


const ChatCenter250 = () => {
  return (
    <div>
        <Container>

<Row>
   
<Col lg={10} md={10} sm={10} xs={10} >
    
<div className='d-flex  chatcenter '>
     <h6>Chat Center</h6>
     
     <div    className='chat250image' >    <img
              src={Chat250}
              alt="Girl in a jacket"
              width="64"
              height="30"
           
            /> </div>
     
            
            </div>
<br/>
<div>

<input placeholder='Search'   className='form-control'  />

</div>


            
             </Col>
<Col lg={2}  md={2} sm={2} xs={2}    ><HiOutlineDotsVertical/> </Col>
           


</Row>


        </Container>

<div></div>


    </div>
  )
}

export default ChatCenter250