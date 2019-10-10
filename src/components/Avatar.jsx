import React from 'react';
import handOnHip from '../assets/images/handonhip.png';
import styled from 'styled-components';

const Styles = styled.div`
  .image-cropper {
    max-width: 175px;
    max-height: 175px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
  }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
`;

export const Avatar = () => (
  <Styles >
    <div >
      <img className="image-cropper center" src={handOnHip} />
      <br />
      {/* <hr /> */}
    </div>
  </Styles>
);
