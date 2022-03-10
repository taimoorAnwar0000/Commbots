import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Login from './Component/Login/Login';
import ChatBot from './Component/ChatBot/ChatBot';
import NavbarChatbot from './Component/Navbar/Navbar'
import Sidebar from './Component/Sidebar/Sidebar';
import ChatBotcard from './Component/ChatBot/ChatBotcard';
import ChatCenter250 from './Component/ChatCenter/ChatCenter250';
import ChartCard from './Component/ChatCenter/ChartCard';





function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/chatbot" element={<ChatBot />} />
      <Route path="/navbar" element={<NavbarChatbot />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/card" element={<ChatBotcard />} />
      <Route path="/chatCenter" element={<ChatCenter250   />} />
      <Route path="/chatcard" element={<ChartCard   />} />






     
    </Routes>
  </Router>
  );
}

export default App;
