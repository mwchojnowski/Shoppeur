import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function JumboSaleDisplay({ First, img, url,title,text }) {
  return (
    <Link href={url} passHref>
      <Wrapper First={First}>
        <SaleImg src={img} />
        <Div First={First}>
          <RedTitle>
            {title}
          </RedTitle>
          <Text>
            {text}
          </Text>
          <ButtonDiv>
            <Button>
              Shop Now
            </Button>
          </ButtonDiv>
        </Div>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.a`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.First ? "125px" : "0px")};
  margin-bottom: 50px;
  max-height: 500px;
  position: relative;
`;

const SaleImg = styled.img`
  width:100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const Div = styled.div`
  display:${(props) => (!props.First ? "flex" : "none")};
  align-items:center;
  flex-direction:column;
  
  position:absolute;
  margin-bottom:360px;
  //left:0px;
  margin-left:65px;
`;

const RedTitle = styled.h1`
  font-family:Helvetica;
  font-weight:800;
  font-size:20px;
  color:#ff1f2c;
  width:100%;
  text-align:left;
  padding-bottom:5px;
`;

const Text = styled.h1`
  font-family:Helvetica;
  font-weight:bold;
  font-size:30px;
  letter-spacing:.5px;
  color:#252525;
  width:100%;
  text-align:left;
  padding-bottom:5px;
`;

const ButtonDiv = styled.div`
  width:100%;
  text-align:left;
`;

const Button = styled.button`
  font-family:Helvetica;
  font-weight:bold;
  font-size:12px;
  letter-spacing:.5px;
  padding:12px 40px;
  background:#343434;
  color:white;
  border:none;
  border-radius:4px;
  display:flex;
  justify-content:center;
  align-items:center;
`;