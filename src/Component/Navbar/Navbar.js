import React from 'react'

import { Container,Navbar,NavDropdown,Nav,Form ,Button,FormControl ,Row, Col} from 'react-bootstrap'
import LoginImageForm from '../images/commbot-login.png'
import Home from '../images/home.png'
import Chat from '../images/chat.png'
import './Navbar.css'
import Bell from '../images/Bell.png'
import Admin from '../images/admin.png'
import Messege from '../images/msg.png'
import Setting from '../images/setting.png'
import Sidebar from '../Sidebar/Sidebar'

const NavbarChatbot = () => {
return (
<Container fluid>
    <Row>
      <Col lg={3} md={2}sm={2} xs={2} > <div   className='Sidebar'> <Sidebar/></div>    </Col> 

 <Col lg={9} md={12} sm={12} xs={12}    >
    <Navbar bg="white" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#"    >  <img src={LoginImageForm}
                alt="Girl in a jacket"
                width="221"
                className='mr-5'
                height="49"/>   </Navbar.Brand>
       <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
<Nav  className="me-auto my-2 my-lg-0  item-end "
        navbarScroll
        >
          <Nav.Link href="#action1 "  className='mr-5' >  Home</Nav.Link>
          <Nav.Link href="#action1 "  className='mr-5' >  ChatCenter</Nav.Link>

          <NavDropdown title="Messege" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Chatbot" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Setting" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Reports" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <span className='messege-icon ml-5' >                
          <img src={Bell}
                alt="Girl in a jacket"
                width="30"
            
                height="40"/>
                
                <img
                src={Admin}
                alt="Girl in a jacket"
                width="40"
                className='image-icon'
                height="40"/>
                
                
          <NavDropdown title="Admin" id="navbarScrollingDropdown"  className='pt-2' >
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
                </span>   
                
        
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </Col>
 
  </Row>

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