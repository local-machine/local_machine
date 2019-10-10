import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .footer {
    text-align: center;
  }
`;


function Footer(){
  return (
    <Styles>
      <hr/>
      <p className="footer">When in Doubt, Whiteboard It Out</p>
    </Styles>
  );
}

export default Footer;
