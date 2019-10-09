import React from 'react';
import { Link } from 'react-router-dom';


function Footer(){
  return (
    <div>
      <h5>Will work for snacks.</h5>
      <Link to="/">Home</Link> | <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Footer;
