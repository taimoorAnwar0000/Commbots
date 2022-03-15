import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import CardProfile from '../images/cardprofile.png'
import './chatcenter.scss'
import forward from '../images/forward.png'
import reply from '../images/reply.png'
import copy from '../images/duplicate.png'
import select from '../images/select.png'
import mic from '../images/mic.png'
import msent from '../images/msent.png'
import Date from '../images/dategroup.png'
import { BsShare } from 'react-icons/bs';
import { ImAttachment } from 'react-icons/im';
import { AiOutlineFile } from 'react-icons/ai';
// import { IoReturnUpForwardSharp } from 'react-icons/Io';
import { MdPersonOutline } from 'react-icons/md';
import { Dropdown } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'
import {BsArrow90DegRight} from 'react-icons/bs'
import {MdOutlineBookmarkBorder} from 'react-icons/md'


const Chat = () => {
  return (

    <div>

      <div className='ChartCard'>

        <div >
          <img className='r_img' src={CardProfile} alt="Girl in a jacket" width="100" height="100" />

        </div>
        <div className='profile-text' >
          <div className='MM-clothing'>

            <div> <h6 className='r_fox'>Robert Fox</h6> </div>
            <div className='mmtext' >MM Clothing</div></div>

          <h6 className='r_mail' style={{color:'#555555'}}>alma.lawson@example.com</h6>
           <h6 className='r_phone' style={{color:'#555555'}}>(270) 555-0117</h6>
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


              <button className='button_close'  > Closed  </button>
            </div>  </div>

          <div className='icon'> <BsArrow90DegRight style={{color:'#F8D418'}}/><MdPersonOutline /> <AiOutlineFile/><MdOutlineBookmarkBorder /><ImAttachment /><BsShare /> </div>  </div>

        <hr></hr>


      </div>


      <div className='bell'>

        <div className='name '  > Jerome Bell    <span className='circle'>01 </span>  </div>
        <div className='name' >Cameron</div>
        <div className='name' >Phyllis Gol.. </div>


      </div>
      <div className='chat_part'>

        <div >


          <div className='message_1'>

            <p className='text_1'>

              Aliqua id fugiat nostrud irure ex duis
              ea quis id quis ad et. Sunt qui esse pariatur
              duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint
              deserunt ut voluptate aute id deserunt nisi.
            </p>


            <Dropdown as={ButtonGroup}>
              <Button variant="success"> </Button>

              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">{" "} <img src={copy} />{" "}Copy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">{" "} <img src={forward} />{" "}Forward</Dropdown.Item>
                <Dropdown.Item href="#/action-3">{" "} <img src={reply} />{" "}Reply</Dropdown.Item>
                <Dropdown.Item href="#/action-3">{" "} <img src={select} />{" "}Select</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>




          </div>

        </div>

        <div className='msg_sent'>


          <div >


            <div className='message_2'>

              <p className='text_1'>

                What's the progress on that task?
              </p>


              <Dropdown as={ButtonGroup}>
                <Button variant="success"> </Button>

                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">{" "} <img src={copy} />{" "}Copy</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">{" "} <img src={forward} />{" "}Forward</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">{" "} <img src={reply} />{" "}Reply</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">{" "} <img src={select} />{" "}Select</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>




            </div>

          </div>


        </div>

        {/* voice type section   */}

        <div className='type_sec'>

          <div className='first_text'>

            <Dropdown as={ButtonGroup}>
              <Button variant="success"> </Button>

              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">{" "}A</Dropdown.Item>
                <Dropdown.Item href="#/action-2">{" "}B</Dropdown.Item>
                <Dropdown.Item href="#/action-3">{" "}C</Dropdown.Item>
                <Dropdown.Item href="#/action-3">{" "}D</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>






          <div className='input_part'>

            <div className="input_box">
              <input className='input_chat' placeholder='Write Here..' type='text' />
              <img className='mic' src={mic} />


            </div>





          </div>

          <div className="msent">
            <img src={msent} />
          </div>



        </div>



      </div>

    </div>
  )
}

export default Chat