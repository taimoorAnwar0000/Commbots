import React from 'react';
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





const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          {/* <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a> */}
        </CDBSidebarHeader>

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
              <CDBSidebarMenuItem ><Form.Select aria-label="Default select example" className='selector' > <FaRegUser/>
  <option className='selector'> Agents</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select></CDBSidebarMenuItem>
            
            
            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Shared Contacts</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;