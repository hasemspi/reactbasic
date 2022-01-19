import React from 'react';
import { Link} from "react-router-dom";
const Service = () => {
    return (
        <div>
 <nav>
   <Link to="/home">Home</Link>
   <Link to="/about">About</Link>
   <Link to="/blog">Blog</Link>
   <Link to="/contact">Contact</Link>
 </nav>
        </div>
    );
};

export default Service;