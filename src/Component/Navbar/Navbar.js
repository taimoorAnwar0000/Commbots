import React, { useState, useEffect } from 'react';

import { Container, Navbar, NavDropdown, Nav, Form, Button, FormControl, Row, Col, Offcanvas } from 'react-bootstrap'
import LoginImageForm from '../images/commbot-login.png'
import Home from '../images/home1.png'
import Chat from '../images/mainchat.png'
import './Navbar.css'
import Bell from '../images/Bell.png'
import Admin from '../images/admin.png'
import Messege from '../images/msg.png'
import Setting from '../images/setting.png'
import Sidebar from '../Sidebar/Sidebar'
import Report from '../images/report.png'
import Chatbot from '../images/chatbot.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineHome } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';


import {Link} from "react-router-dom"


const NavbarChatbot = (props) => {

  const [changecolor, setChangeColor] = useState(0)


  // const [flag,setFlag]=useState(true)

  const [flag, setFlag] = useState(true)
  // const [marginNavbar,setMarginNavbar]=useState(true)
  const handleClick1 = () => {

    console.log('buton click')
    setChangeColor(1);
  

  }
  const handleClick2 = () => {

    console.log('buton click')
    setChangeColor(2);
  

  }

  const handleClick3 = () => {

    console.log('buton click')
    setChangeColor(3);
  

  }

  const handleClick4 = () => {

    console.log('buton click')
    setChangeColor(4);
  

  }

  const handleClick5 = () => {

    console.log('buton click')
    setChangeColor(5);
  

  }

  const handleClick6 = () => {

    console.log('buton click')
    setChangeColor(6);
  

  }



  const handleFlage = () => {

    setFlag(true)
  }


  useEffect(() => {

  }, [flag]);


  return (


    <Container fluid>
      <div className='Navbar1'  >
        <Row>

          <Navbar bg="white" expand="lg">

            <Container fluid>


              <Navbar.Brand href="#"    ><GiHamburgerMenu className='sidebaricon'
                // onClick={handleFlage}
                onClick={() => {
                  setFlag(!flag)
                  props.setState(!flag)
                }}
              />

                <img src={LoginImageForm}
                  alt="Girl in a jacket"
                  width="221"
                  className='mr-5 picHeader'
                  height="49" />
                <Sidebar flag={flag} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0  item-end "
                  navbarScroll
                >






                  <div className={changecolor == 1 ? 'color1' : 'colorChange'} onClick={handleClick1} >  <img
                    src={Home}
                    alt="Girl in a jacket"
                    width="24"
                    className='image-icon  '
                    height="30" />   <Link to="/chatbot "    className='navbar-link' >   <span className={changecolor == 1 ? 'icon_text' : 'colorChange'}>Home</span></Link>  </div>


                  <div className={changecolor == 2 ? 'color1' : 'colorChange'} onClick={handleClick2} >  <img
                    src={Chat}
                    alt="Girl in a jacket"
                    width="25"
                    className='image-icon  mr-5'
                    height="30" />   <Link to="/mainchat " className='navbar-link' >  <span className={changecolor == 2 ? 'icon_text' : 'colorChange'}>ChatCenter</span></Link>  </div>


                  <div className={changecolor == 3 ? 'color1' : 'colorChange'} onClick={handleClick3}>

                  

                    <img
                      src={Messege}
                      alt="Girl in a jacket"
                      width="25"
                      className={changecolor == 2 ? 'image-icon-1' : 'image-icon'}
                      height="30" />
                      
                      <Link to="/mainchat " className='d-flex navbar-link ' >  <span className={changecolor == 3 ? 'icon_text' : 'colorChange'}>Messege</span> <RiArrowDropDownLine className={changecolor == 2 ? 'icon_text' : 'text_arrow_up'}/> </Link>   
                      </div>


                  <div className={changecolor == 4 ? 'color1' : 'colorChange'} onClick={handleClick4}>
                    <img
                      src={Chatbot}
                      alt="Girl in a jacket"
                      width="40"
                      className='image-icon'
                      height="40" />
                    {/* <NavDropdown title="Chatbot" id="navbarScrollingDropdown   " className='mr-5' >
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown> */}

                    <Link to="/chatbot " className='d-flex navbar-link' >  <span className={changecolor == 4 ? 'icon_text' : 'colorChange'}>Chatbot</span> <RiArrowDropDownLine className='text_arrow_up'/></Link>

                    </div>

                  <div className={changecolor == 5 ? 'color1' : 'colorChange'} onClick={handleClick5}>

                    <img
                      src={Setting}
                      alt="Girl in a jacket"
                      width="30"
                      className='image-icon'
                      height="35" />
                    {/* <NavDropdown title="Setting" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown> */}
                    
                    <Link to=" " className='d-flex navbar-link' >  <span className={changecolor == 5 ? 'icon_text' : 'colorChange'}>Setting</span> <RiArrowDropDownLine className='text_arrow_up'/></Link>
                    </div>

                  <div className={changecolor == 6 ? 'color1' : 'colorChange'} onClick={handleClick6}>
                    <img
                      src={Report}
                      alt="Girl in a jacket"
                      width="30"
                      className='image-icon'
                      height="35" />
                    {/* <NavDropdown title="Reports" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown> */}
                    <Link to=" " className='d-flex navbar-link' >  <span className={changecolor == 6 ? 'icon_text' : 'colorChange'}>Reports</span> <RiArrowDropDownLine className='text_arrow_up'/></Link>
                    </div>


                  <div className='Admin-right'>
                    <span className='messege-icon ml-5' >
                      <img src={Bell}
                        alt="Girl in a jacket"
                        width="24"

                        height="24" />

                      <img
                        src={Admin}
                        alt="Girl in a jacket"
                        className='admin_img'
                        style={{width:'24px !important', height:'24px !important' }}
                    />


                      {/* <NavDropdown title="Admin" id="navbarScrollingDropdown" className='pt-2' >
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown> */}

                      <Link to=" " className='d-flex navbar-link' > <span className={changecolor == 6 ? 'icon_text' : 'icon_text2'}>Admin</span>  <RiArrowDropDownLine className='text_arrow_up'/></Link>

                    </span>
                  </div>

                </Nav>

              </Navbar.Collapse>
            </Container>
          </Navbar>



          
          {/* </Col> */}

        </Row></div>

      <div className='secondnavbar'>  <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#"><img src={LoginImageForm}
            alt="Girl in a jacket"
            width="221"
            className='mr-5'
            height="49" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto my-2 my-lg-0  item-start "
                navbarScroll
              >
               <Nav.Link href="/ "    className='' >   Home</Nav.Link> 
                <Nav.Link href="#action1 " className='mr-5' >  ChatCenter</Nav.Link>

                <Nav.Link href="/mainchat " className='d-flex' >  Messege <RiArrowDropDownLine/></Nav.Link> 

                <Nav.Link href="/chatbot " className='d-flex' >  Chatbot <RiArrowDropDownLine/></Nav.Link>
                
                <Nav.Link href=" " className='d-flex' >  Setting <RiArrowDropDownLine/></Nav.Link>
                <Nav.Link href=" " className='d-flex' >  Reports <RiArrowDropDownLine/></Nav.Link>

                <div className='Admin-right'>
                  <span className='messege-icon ml-5' >
                    <img
                      className='bell_fix'
                      src={Bell}
                      alt="Girl in a jacket"
                      width="30"

                      height="40" />

                    <img
                      src={Admin}
                      alt="Girl in a jacket"
                      width="40"
                      className='image-icon'
                      height="40" />


                    <NavDropdown title="Admin" id="navbarScrollingDropdown" className='pt-2' >
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </span>
                </div>

              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>  </div>



    </Container>
    //     <Navbar >
    //   <Container fluid >

    // <Row  style={{width:'100%'}}  >
    //     <div className='navbar-row-1'>

    //         <Col lg={3}>

    //     <Navbar.Brand href="#"><img
    //                 src={LoginImageForm}
    //                 alt="Girl in a jacket"
    //                 width="221"
    //                 height="49"
    //               />
    // </Navbar.Brand></Col>
    // <Col lg={7}>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <Nav.Link href="#action1">  <img
    //                 src={Home}
    //                 alt="Girl in a jacket"
    //                 width="24"
    //                 height="23"
    //                />  Home</Nav.Link>
    //         <Nav.Link href="#action2">   <img
    //                 src={Chat}
    //                 alt="Girl in a jacket"
    //                 width="24"
    //                 height="23"/>  Chat Center</Nav.Link>

    //             <span className='messege-icon' ><img
    //                 src={Messege}
    //                 alt="Girl in a jacket"
    //                 width="24"
    //                 className='image-icon'
    //                 height="30"/>


    //                 <NavDropdown title="Messege" id="navbarScrollingDropdown">
    //           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action5">
    //             Something else here
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //                 </span>    
    //                 <span className='messege-icon' ><img
    //                 src={Chat}
    //                 alt="Girl in a jacket"
    //                 className='image-icon'
    //                 width="24"
    //                 height="30"/>


    //                 <NavDropdown title="Chatbot" id="navbarScrollingDropdown">
    //           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action5">
    //             Something else here
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //                 </span>    
    //                 <span className='messege-icon' ><img
    //                 src={Setting}
    //                 alt="Girl in a jacket"
    //                 className='image-icon'
    //                 width="24"
    //                 height="30"/>


    //                 <NavDropdown title="Setting" id="navbarScrollingDropdown">
    //           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action5">
    //             Something else here
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //                 </span>    
    //                 <span className='messege-icon' ><img
    //                 src={Home}
    //                 alt="Girl in a jacket"
    //                 width="24"
    //                 className='image-icon'
    //                 height="30"/>


    //                 <NavDropdown title="Reports" id="navbarScrollingDropdown">
    //           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action5">
    //             Something else here
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //                 </span>    



    //       </Nav>

    //     </Navbar.Collapse></Col>

    //     <Col lg={2}>

    //                 <span className='messege-icon' >
    //                     <img
    //                 src={Bell}
    //                 alt="Girl in a jacket"
    //                 width="34"
    //                 className='image-icon mr-1'
    //                 height="50"/>

    //                 <img
    //                 src={Admin}
    //                 alt="Girl in a jacket"
    //                 width="60"
    //                 className='image-icon'
    //                 height="60"/>


    //                 <NavDropdown title="Admin" id="navbarScrollingDropdown"  className='pt-2' >
    //           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action5">
    //             Something else here
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //                 </span>   

    //     </Col>
    //     </div>
    //     </Row>
    //   </Container>
    // </Navbar>
  )
}

export default NavbarChatbot