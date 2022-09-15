import Home from './Views/Home/Home';
import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Details from './Views/Details/Details';
import NotFound from './Views/NotFound/NotFound';
import Navbar from './Componentes/Navbar/Navbar';


function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/details" element={<Details/>} />
          <Route path='/NotFound' element ={<NotFound/>}/>
        </Routes>
      </HashRouter>
      <p>v1.5.0</p>
     
    </div>
  );
}

export default App;
