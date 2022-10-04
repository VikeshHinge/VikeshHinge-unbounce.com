
import './App.css';
import Navbar from './component/nav';
import Routepage from './component/AllRouts';
import Footer from './component/footer';
import MinDrop from "./component/navdropdown/mindrop"
import Login from './component/Login';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routepage/>
    <Footer/> 
    </div>
  );
}

export default App;
