import React,{useState,useEffect} from 'react';

import { Container,Navbar,NavDropdown,Nav,Form ,Button,FormControl ,Row, Col,Offcanvas} from 'react-bootstrap'
import LoginImageForm from '../images/commbot-login.png'
import Home from '../images/home.png'
import Chat from '../images/mainchat.png'
import './Navbar.css'
import Bell from '../images/bell.png'
import Admin from '../images/admin.png'
import Messege from '../images/msg.png'
import Setting from '../images/setting.png'
import Sidebar from '../Sidebar/Sidebar'
import Report from '../images/report.png'
import Chatbot from '../images/chatbot.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineHome } from 'react-icons/ai';




const NavbarChatbot = (props) => {
  

  // const [flag,setFlag]=useState(true)

 const [flag,setFlag]=useState(true)
  // const [marginNavbar,setMarginNavbar]=useState(true)




  const handleFlage =() =>{

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
    
    
      <Navbar.Brand href="#"    ><GiHamburgerMenu  className='sidebaricon' 
      // onClick={handleFlage}
      onClick={()=>{ setFlag(!flag)
        props.setState(!flag)
      }}
          />
      
<img src={LoginImageForm}
                alt="Girl in a jacket"
                width="200"
                className='mr-5 picHeader'
                height="49"/>  
        <Sidebar flag={flag}/>
                 </Navbar.Brand>
       <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
<Nav  className="me-auto my-2 my-lg-0  item-end "
        navbarScroll
        > 

<div className='d-flex ' >  <img
                src={Home}
                alt="Girl in a jacket"
                width="25"
                className='image-icon  '
                height="30"/>   <Nav.Link href="#action1 "  className='' >   Home</Nav.Link>  </div>


<div className='d-flex' >  <img
                src={Chat}
                alt="Girl in a jacket"
                width="25"
                className='image-icon  mr-5'
                height="30"/>   <Nav.Link href="#action1 "  className='' >  ChatCenter</Nav.Link>  </div>

          
          

          <img
                src={Messege}
                alt="Girl in a jacket"
                width="25"
                className='image-icon '
                height="30"/> <NavDropdown title="Messege" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <img
                src={Chatbot}
                alt="Girl in a jacket"
                width="40"
                className='image-icon'
                height="40"/>
          <NavDropdown title="Chatbot" id="navbarScrollingDropdown   "  className='mr-5' >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <img
                src={Setting}
                alt="Girl in a jacket"
                width="30"
                className='image-icon'
                height="35"/>
          <NavDropdown title="Setting" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <img
                src={Report}
                alt="Girl in a jacket"
                width="30"
                className='image-icon'
                height="35"/>
          <NavDropdown title="Reports" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>

          <div className='Admin-right'>
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
                height="49"/> </Navbar.Brand>
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
      <Nav  className="me-auto my-2 my-lg-0  item-start "
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

          <div className='Admin-right'>
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