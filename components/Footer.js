import React from "react";
import styled from "styled-components";

const Footer = ()=> {
  return(
    <Container>
      <UpperHalf>
        <Col1>
          <Desc>
            <H2>
              O.com®
            </H2>
            <P>
              Shop Overstock.com and find the best online deals on everything for your home. 
              We work every day to bring you discounts on new products across our entire store. 
              Whether you're looking for memorable gifts or everyday essentials, you can buy them here for less.
            </P>
          </Desc>
        </Col1>
        <Col2>
          <InnerDiv1>
            <H1>
              We Save People Money®
            </H1>
            <H1>
              All Things Home All For Less™
            </H1>
            <H1>
              Shop Social®
            </H1>
            <H1>
              Daily Dig®
            </H1>
          </InnerDiv1>
          <InnerDiv2>
            <H1>
              Trusted Merchant®
            </H1>
            <H1>
              O is the One®
            </H1>
            <H1>
              O’®
            </H1>
            <H1>
              Presa®
            </H1>
          </InnerDiv2>
        </Col2>
      </UpperHalf>
      <LowerHalf>
        <Div>
          © Copyright 2021, Overstock Inc. All Rights Reserved
        </Div>
        <Div>
          
        </Div>
      </LowerHalf>
    </Container>
  )
}
export default Footer;

const Container = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  margin-top:100px;
  background-color:#444;
  flex-direction:column;
  color:white;
`;
const UpperHalf = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
`;
const Col1 = styled.div`
  width:50%;
  display:flex;
`;
const Desc = styled.div`
  padding:25px 75px;
`;
const H2 = styled.h2`
  font-size: 20px;
  line-height: 1.2;
  font-family: Helvetica,Arial,sans-serif;
  margin-bottom: 12px;
`;
const P = styled.p`
  line-height: 1.5;
  font-size:12px;
  width:70%;
`;
const Col2 = styled.div`
  width:50%;
  display:flex;
  flex-direction:row;
`;
const InnerDiv1 = styled.div`
  width:50%;
  display:flex;
  flex-direction:column;
  padding:25px;
`;
const InnerDiv2 = styled.div`
  width:50%;
  display:flex;
  flex-direction:column;
  padding:25px;
`;
const H1 = styled.h1`
  font-family: Helvetica,Arial,sans-serif;
  font-size:20px;
  margin-bottom:16px;
`;
const LowerHalf = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  margin-top:20px;
  background-color:#444;
  color:white;
`;
const Div = styled.div`
    padding:25px;
`;
const A = styled.a`
    padding:0 25px;
`;
