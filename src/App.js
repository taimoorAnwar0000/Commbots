import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Login from './Component/Login/Login';
import ChatBot from './Component/ChatBot/ChatBot';
<<<<<<< HEAD
import Graph from './Component/Graph/Graph';
import Bar from './Component/Graph/Bar';
=======
import NavbarChatbot from './Component/Navbar/Navbar'
import Sidebar from './Component/Sidebar/Sidebar';
import ChatBotcard from './Component/ChatBot/ChatBotcard';
import ChatCenter250 from './Component/ChatCenter/ChatCenter250';
import ChartCard from './Component/ChatCenter/ChartCard';
import Chat from './Component/ChatCenter/Chat';
import ChatCenter from './Component/ChatCenter/ChatCenter';




>>>>>>> 14a79c08d13845d221b88a5f56c7305d0a353ef6


function App() {
  return (
<<<<<<< HEAD
    <>
{/* 
     <Router>
     <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/chatbot" element={<ChatBot />} />
=======
    <Router>
      {/* <NavbarChatbot/> */}
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/chatbot" element={<ChatBot />} />
      <Route path="/navbar" element={<NavbarChatbot />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/card" element={<ChatBotcard />} />
      <Route path="/chatCenter" element={<ChatCenter250   />} />
      <Route path="/chatcard" element={<ChartCard   />} />
      <Route path="/chat" element={<Chat   />} />
      <Route path="/mainchat" element={<ChatCenter/>} />







>>>>>>> 14a79c08d13845d221b88a5f56c7305d0a353ef6

     
     </Routes>
   </Router>
   <Graph/>
   <Bar/> */}
 
    </>
  );
}

export default App;
