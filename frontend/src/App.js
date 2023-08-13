import './App.css';
import {useState , useEffect } from 'react'
import {Routes, BrowseRouter, Route, BrowserRouter} from 'react-router-dom'
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Faculty_profile from './Components/Faculty_profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Login />}/>
          <Route path="/signup" element ={<Signup />}/>
          <Route path="/employee" element ={<Home />}/>
          <Route path="/profile" element ={<Faculty_profile />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
