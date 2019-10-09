import React from 'react';
import handOnHip from '../assets/images/handonhip.png';
import styled from 'styled-components';

const Styles = styled.div`
  .image-cropper {
    width: 15%;
    height: 15%;
    max-width: 100px;
    max-height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  .profile-pic {
    display: inline-block;
    margin: 0 auto;
    float: left;
  }
  .myContent{
    column-count: 2;
    column-gap: 20px;
    height: 350px;
  }
`;

export const Avatar = () => (
  <Styles >
    <div >
      <img className="image-cropper myContent" src={handOnHip} />
    </div>
  </Styles>
);
