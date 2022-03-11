
import React from "react";
import './Graph.scss'
import home from '../images/home.png'
import user from '../images/user.png'
import calender from '../images/calender.png'
import all from '../images/all.png'
import { styled } from '@mui/system';
import {Dropdown} from 'react-bootstrap'




const Bar = () => {

 


  return <div className="main_bar">

<div className="top_bar">

<div className="bar_home">
    <img src={home}/>
</div>


<div className="bar_end">

<div className="calender">
<img src={calender}/> 09/02/22 - 15/02/22



</div>


<div className="">



<Dropdown className="d-inline mx-2" autoClose="inside">
    <Dropdown.Toggle id="dropdown-autoclose-inside">
    <img src={all}/>   All
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#">A</Dropdown.Item>
      <Dropdown.Item href="#">B</Dropdown.Item>
      <Dropdown.Item href="#">C</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>


</div>


<div className="bar_user">


<Dropdown className="d-inline mx-2" autoClose="outside">
    <Dropdown.Toggle id="dropdown-autoclose-outside">
    <img src={user}/>   Veiw All
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#">A</Dropdown.Item>
      <Dropdown.Item href="#">B</Dropdown.Item>
      <Dropdown.Item href="#">C</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</div>








</div>









</div>








      
  </div>;
};

export default Bar;
