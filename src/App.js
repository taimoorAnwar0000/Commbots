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
import Graph from './Component/Graph/Graph';
import Bar from './Component/Graph/Bar';


function App() {
  return (
    <>
{/* 
     <Router>
     <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/chatbot" element={<ChatBot />} />

     
     </Routes>
   </Router>
   <Graph/>
   <Bar/> */}
 
    </>
  );
}

export default App;
