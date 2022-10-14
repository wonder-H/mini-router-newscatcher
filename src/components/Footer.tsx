import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  color: #707070;
  box-shadow: -1px -1px 4px rgba(78, 77, 77, 0.3);

  height: 100%;
  width: 100%;
  background-color: #e8e8e8;
  margin: auto;
  margin-top: 50px;
  div {
    width: 80%;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 25px;
    span {
      display: block;
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 25px;
    }
    p {
      margin-top: 10px;
      font-size: 14px;
      line-height: 1em;
    }
  }
`;
function Footer() {
  return (
    <StyledFooter>
      <div>
        <span>MiniNews</span>
        <p>This Website is Mini Router Project</p>
        <p>Please visit my github(Wonder-H) if you have interest</p>
        <p>Started from 10/10/2022</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
