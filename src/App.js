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


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/chatbot" element={<ChatBot />} />

     
    </Routes>
  </Router>
  );
}

export default App;
