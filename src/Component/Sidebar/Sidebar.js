import React,{useState} from 'react';
import { Container,Navbar,NavDropdown,Nav,Form ,Button,FormControl ,Row, Col} from 'react-bootstrap'
import '../Navbar/Navbar.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import Agent from '../images/agent.png'
import All from '../images/all.png'
import User from '../images/user.png'
import { CgMenu } from 'react-icons/cg';
import { FaRegUser } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';





const Sidebar = (props) => {
  
  console.log(props.flag)
 
  return (
<Fade left>
        
        
    <div style={{ display:props.flag===true?'none':'flex', height: '100vh', overflow: 'scroll initial' }}  className='mainSidebar'  >
      <CDBSidebar toggled={false} textColor="#fff" backgroundColor="#333" style={{ width:props.flag===true?'0px':'270px', minWidth:props.flag===true?'0px':'270px' }} >
      

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Assignment To Me</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Assignment To Team</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Conversation Alerts</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Team Members</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Shared Contacts</CDBSidebarMenuItem>
            </NavLink>
            <hr/>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem > <CgMenu/> All</CDBSidebarMenuItem>
            </NavLink>
           <CDBSidebarMenuItem > <div className='d-flex'> <span className='mr-2'> <FaRegUser/>  </span>  <span> <Form.Select aria-label="Default select example" className='selector' >  
  <option className='selector'> Agents</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select> </span></div> </CDBSidebarMenuItem>
<CDBSidebarMenuItem > <div className='d-flex'> <span className='mr-2'>   <img
                src={Agent}
                alt="Girl in a jacket"
                width="20"
                height="20"
                className='label'

              /> </span>  <span> <Form.Select aria-label="Default select example" className='selector' >  
  <option className='selector'> Labels</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select> </span></div> </CDBSidebarMenuItem>

<hr/>
<CDBSidebarMenuItem > <div className='d-flex'> <span className='mr-2'> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>  </span>  <span> <Form.Select aria-label="Default select example" className='selector' >  
  <option className='selector'> WhatApp</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select> </span></div> </CDBSidebarMenuItem>
<CDBSidebarMenuItem > <div className='d-flex'> <span className='mr-2'> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>  </span>  <span> <Form.Select aria-label="Default select example" className='selector' >  
  <option className='selector'> Messenger</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select> </span></div> </CDBSidebarMenuItem>
<CDBSidebarMenuItem > <div className='d-flex'> <span className='mr-2'> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>  </span>  <span> <Form.Select aria-label="Default select example" className='selector' >  
  <option className='selector'> WebChat</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select> </span></div> </CDBSidebarMenuItem>
<CDBSidebarMenuItem > <div className='d-flex'> <span className='mr-2'> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>  </span>  <span> <Form.Select aria-label="Default select example" className='selector' >  
  <option className='selector'> Email(Beta)</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select> </span></div> </CDBSidebarMenuItem>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
            
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

      </CDBSidebar>
    </div></Fade>

  );
};

export default Sidebar;