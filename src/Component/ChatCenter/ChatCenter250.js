import React from 'react'

import Chat250 from '../images/250.png'
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { Container, Row, Col } from 'react-bootstrap';
import './chatcenter.scss'


const ChatCenter250 = () => {
  return (
    <div>
      <Container>

        <Row>

          <Col lg={10} md={10} sm={10} xs={10} >

            <div className='d-flex  chatcenter '>
              <h6>Chat Center</h6>

              <div className='chat250image' >    <img
                src={Chat250}
                alt="Girl in a jacket"
               

              /> </div>


            </div>
            <br />
           



          </Col>
          <Col className='three_dots'  lg={2} md={2} sm={2} xs={2}    ><HiOutlineDotsVertical /> </Col>



        </Row>
        <div>

<input placeholder='Search' className='form-control' />

</div>


      </Container>

      <div></div>


    </div>
  )
}

export default ChatCenter250