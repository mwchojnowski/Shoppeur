import React from "react";
import Styled from "styled-components";

const Footer = ()=> {
  return(
    <Container>
      <Div>
        © Copyright 2021, Overstock Inc. All Rights Reserved
      </Div>
      <Div>
        <A>Privacy Policy</A>
        <A>Terms and Conditions</A>
        <A>Promotional Terms</A>
      </Div>
    </Container>
  )
}
export default Footer;

const Container = Styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    margin-top:100px;
    background-color:#444;
    color:white;
`;
const Div = Styled.div`
    padding:25px;
`;
const A = Styled.a`
    padding:0 25px;
`;
