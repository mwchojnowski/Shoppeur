import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function JumboSaleDisplay({ First, img, url }) {
  return (
    <Link href={url} passHref>
      <Wrapper First={First}>
        <SaleImg src={img} />
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.a`
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.First ? "125px" : "0px")};
  margin-bottom: 50px;
  max-height: 500px;
  position: relative;
`;

const SaleImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
