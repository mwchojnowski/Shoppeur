import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";

export default function MenuItem(props) {
  return (
    <Wrapper href={props.href}>
      <Title>{props.name}</Title>
      <Icon>
        <RiArrowRightSLine />
      </Icon>
    </Wrapper>
  );
}
const Wrapper = Styled.a`
  width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dadcdf;
    background-color: #f9fafb;
    font-weight: 500;
    font-size: 25px;
    color: #2f3337;
    height: 50px;
    align-items: center;
    display: flex;
    text-decoration: unset;
`;

const Title = Styled.h4`
display: flex;
align-items: center;
font-size: 15px;
padding-left: 25px;
`;

const Icon = Styled.div`
padding-right: 20px;
`;