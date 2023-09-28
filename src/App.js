import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
              <Route path="/home"  element={<Home/>}></Route>
              <Route path="/"  element={<Login/>}></Route>
        </Routes>
    </div>
  );
}
//
export default App;
