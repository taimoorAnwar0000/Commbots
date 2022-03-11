import React, { useState } from "react";
// mui

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// pics
import sent from "../../Component/images/sent.png";
import get from "../../Component/images/recieve.png";
import template from "../../Component/images/template.png";
import messages from "../../Component/images/messages.png";
import contact from "../../Component/images/contact.png";
import group from "../../Component/images/Group.png";
import expand from "../../Component/images/expand.png";

import home from '../images/home.png'
import user from '../images/user.png'
import calender from '../images/calender.png'
import all from '../images/all.png'
import { styled } from '@mui/system';
import {Dropdown} from 'react-bootstrap'
// chart
import "./Graph.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,

} from "recharts";
import { Col, Container, Row } from "react-bootstrap";

const data = [
  {
    name: "0",

    pv: 2400,
    amt: 2400,
  },
  {
    name: "1",

    pv: 1398,
    amt: 2210,
  },
  {
    name: "2",

    pv: 9800,
    amt: 2290,
  },
  {
    name: "3",

    pv: 3908,
    amt: 2000,
  },
  {
    name: "4",

    pv: 4800,
    amt: 2181,
  },
  {
    name: "5",

    pv: 3800,
    amt: 2500,
  },
  {
    name: "6",

    pv: 4300,
    amt: 2100,
  },
  {
    name: "7",

    pv: 4300,
    amt: 2100,
  },
  {
    name: "8",

    pv: 4300,
    amt: 2100,
  },
];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const Graph = () => {
  const [val, setVal] = useState();
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  return (
    <>

<div className="main_bar">

<div className="top_bar">

<div className="bar_home">
    <img src={home}/> Home
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

      <div className="main_graph">
        <div className="graph_sidebar">
          <div className="sidebar_content">
            {/* icon 1 */}

            <div className="slidebar_icons">
              <img src={get} />

              <div className="icon_text">
                <div className="icon_title">Recieved messages</div>

                <div className="icon_number">994</div>
              </div>
            </div>

            {/* icon 2 */}

            <div className="slidebar_icons">
              <img src={sent} />

              <div className="icon_text">
                <div className="icon_title">Sent Messages</div>

                <div className="icon_number">536</div>
              </div>
            </div>

            {/* icon 3 */}

            <div className="slidebar_icons">
              <img src={group} />

              <div className="icon_text">
                <div className="icon_title">Session Messages</div>

                <div className="icon_number">177</div>
              </div>
            </div>

            {/* icon 4 */}

            <div className="slidebar_icons">
              <img src={contact} />

              <div className="icon_text">
                <div className="icon_title_special ">Monthly Active Users</div>

                <div className="icon_number">196</div>
              </div>
            </div>

            {/* icon 5 */}

            <div className="slidebar_icons">
              <img src={messages} />

              <div className="icon_text">
                <div className="icon_title">Conversations</div>

                <div className="icon_number">922</div>
              </div>
            </div>

            {/* icon 6 */}

            <div className="slidebar_icons">
              <img src={template} />

              <div className="icon_text">
                <div className="icon_title">Templates Sent</div>

                <div className="icon_number">429</div>
              </div>
            </div>
          </div>
        </div>





        
        <div className="graph_content">
          <div className="graph_start">
            <div className="graph_1">
              <div className="graph1_title">Recieved Messages</div>

              <ResponsiveContainer width="100%" height="90%">

              <LineChart
                width={533}
                height={350}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis type="number" domain={[0, 20]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>

</ResponsiveContainer>


            </div>

            <div className="graph_2">
              <div className="graph1_title">Recieved Messages</div>
              <ResponsiveContainer width="100%" height="90%">
              <LineChart
                width={518}
                height={350}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis type="number" domain={[0, 20]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="table_1">
            <div className="table_title">
              <div className="summary">Usage Summary</div>

              <div className="expand">
                <img src={expand} />
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Usage</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Recieved Messages</td>
                  <td>994</td>
                </tr>

                <tr>
                  <td>Sent Messages</td>
                  <td>536</td>
                </tr>

                <tr>
                  <td>Session Messages</td>
                  <td>177</td>
                </tr>

                <tr>
                  <td>Monthly Active Users</td>
                  <td>196</td>
                </tr>

                <tr>
                  <td>Conversation</td>
                  <td>922</td>

                  <td>
                    <div className="slider">
                      <Box width={480}>
                        <Slider
                          onChange={handleChange}
                          size="small"
                          defaultValue={70}
                          aria-label="Small"
                          valueLabelDisplay="auto"
                        />

                      </Box>
                        <div>{val}&nbsp; % </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Templets Sent</td>
                  <td>429</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table_2">
            <div className="table_title">
              <div className="summary">App Summary</div>

              <div className="expand">
                <img src={expand} />
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Check Interval</th>
                  <th>Message</th>
                  <th>Email</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>No Response</td>
                  <td>5min</td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                 
                </tr>

                <tr>
                  <td>Abort Chat</td>
                  <td>12min</td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                </tr>

                <tr>
                  <td>Thankyou</td>
                  <td>177</td>
                  <td>-</td>
                  <td><input type="checkbox" /></td>
                </tr>

               
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Graph;
