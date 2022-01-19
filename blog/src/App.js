import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

import BeforNave from "./Navebar/BeforNave";
function App() {
  return (
   <>

 <BeforNave/>
<Routes>
<Route path="/home" element={<Home/>}>
</Route>
<Route path="/about" element={<About/>}>
</Route>
<Route path="/blog" element={<Blog/>}>
</Route>
<Route path="/contact" element={<Contact/>}>
</Route>
</Routes>

 

   </>
  );
}

export default App;
