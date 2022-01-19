import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Routes, Route} from "react-router-dom";
import BeforNave from "./Navebar/BeforNave";

import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

ReactDOM.render(
    <BrowserRouter>
    <BeforNave/>
      <Routes>
        
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
          
      </Routes>
    </BrowserRouter>
  ,document.getElementById('root')
);


