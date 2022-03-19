import React, { useState } from "react";
// mui

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

// icons
import { HiMenu } from "react-icons/hi";
// pics
import sent from "../../Component/images/sent.png";
import get from "../../Component/images/recieve.png";
import template from "../../Component/images/template.png";
import messages from "../../Component/images/messages.png";
import contact from "../../Component/images/contact.png";
import group from "../../Component/images/Group.png";
import expand from "../../Component/images/expand.png";

import home from "../images/home.png";
import user from "../images/user.png";
import calender from "../images/calender.png";
import all from "../images/all.png";
import { styled } from "@mui/system";
import { Dropdown } from "react-bootstrap";
// chart
import "./Graph.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from 'faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

const labels = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

export const data = {
  labels,
  datasets: [
    // {
    //   label: 'Dataset 1',
    //   data: [20 , 66 , 77, 898, 676 , 87 , 8],
    //   borderColor: 'rgb(255, 99, 132)',
    //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
    // },
    {
      label: "Dataset 2",
      data: [12, 998, 77, 838, 9, 87, 8],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const Graph = (props) => {
  const [val, setVal] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const [age, setAge] = React.useState("");

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState(null);

  return (
    <>
      <div className="stay_away">
        <div
          className={props.state == false ? "chatbotmainclass" : "chatbotmain2"}
        >
          <div className="main_bar">
            <div className="top_bar">
              <div className="bar_home">
                <img src={home} /> Home
              </div>

              <div className="bar_end">
                <div className="calender">
                  <img src={calender} />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      className="datepickerclass"
                      label="  09/02/22 - 15/02/22"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>

                <div className="bar_all">
                  <Dropdown className="d-inline mx-2" autoClose="inside">
                    <Dropdown.Toggle id="dropdown-autoclose-inside">
                      <img src={all} /> <div className="bar_all_text">All</div>
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
                      <img src={user} />

                      <div className="bar_all_text">Veiw All</div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">A</Dropdown.Item>
                      <Dropdown.Item href="#">B</Dropdown.Item>
                      <Dropdown.Item href="#">C</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="filter">
                  <Dropdown className="d-inline mx-2" autoClose="inside">
                    <Dropdown.Toggle id="dropdown-autoclose-inside">
                      Filter
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            label="  09/02/22 - 15/02/22"
                            value={value}
                            onChange={(newValue) => {
                              setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        {" "}
                        <Dropdown className="d-inline mx-2" autoClose="inside">
                          <Dropdown.Toggle id="dropdown-autoclose-inside">
                            <img src={all} /> All
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#">A</Dropdown.Item>
                            <Dropdown.Item href="#">B</Dropdown.Item>
                            <Dropdown.Item href="#">C</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>{" "}
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        {" "}
                        <Dropdown className="d-inline mx-2" autoClose="outside">
                          <Dropdown.Toggle id="dropdown-autoclose-outside">
                            <img className="veiw_img" src={user} /> Veiw All
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#">A</Dropdown.Item>
                            <Dropdown.Item href="#">B</Dropdown.Item>
                            <Dropdown.Item href="#">C</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>

          <div className="main_graph">
            <div className="go_left">
              <div className="get_left">
                <div className="graph_sidebar">
                  <div className="sliderbar_start">
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
                          <div className="icon_title_special ">
                            Monthly Active Users
                          </div>

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
                </div>
              </div>
            </div>

            <div className="graph_content">
              <div className="graph_start">
                <div className="graph_1">
                  {/* <div className="graph1_title">Recieved Messages</div> */}

                  <Line options={options} data={data} />
                </div>

                <div className="graph_2">
                  <Line options={options} data={data} />
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
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <input type="checkbox" />
                      </td>
                    </tr>

                    <tr>
                      <td>Abort Chat</td>
                      <td>12min</td>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <input type="checkbox" />
                      </td>
                    </tr>

                    <tr>
                      <td>Thankyou</td>
                      <td>177</td>
                      <td>-</td>
                      <td>
                        <input type="checkbox" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
