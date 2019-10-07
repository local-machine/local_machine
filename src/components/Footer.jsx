import React from 'react';
import { Link } from 'react-router-dom';


function Footer(){
  return (
    <div>
      <h3>Will work for snacks.</h3>
      <Link to="/">Home</Link> | <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Footer;
