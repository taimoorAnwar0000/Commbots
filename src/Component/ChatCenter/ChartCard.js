import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import CardProfile from '../images/cardprofile.png'
import './chatcenter.css'
import Date from '../images/dategroup.png'
const ChartCard = (props) => {
  return (
    <div  className='ChartCard'>

<div >
<img src={props.image} alt="Girl in a jacket" width="100" height="100"/>

</div>
<div className='profile-text' >
  <div className='MM-clothing'>

   <div> <h6>{props.name}</h6> </div>  <div  className='mmtext' >MM Clothing</div></div>
    
    <h6>{props.text}</h6>
</div>

<div className='date' >11/02/22 <div><img src={Date} alt="Girl in a jacket" width="60" height="30"/> </div>  </div>


    </div>
  )
}

export default ChartCard