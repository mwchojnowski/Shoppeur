import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { VscBell } from "react-icons/vsc";
import Cart from "../../public/Cart_Icon.svg";
import { BsPerson } from "react-icons/bs";

export default function NavOption(props) {
  return (
    <Wrapper
      type={props.type}
      hide={
        props.isTablet && (props.type === "account" || props.type === "Try")
      }
    >
      {props.type === "cart" ? (
        <>
          <Cart /> <CartNumber>0</CartNumber>
        </>
      ) : props.type === "account" ? (
        <BsPerson />
      ) : props.type === "bell" ? (
        <VscBell />
      ) : (
        <BsPerson />
      )}
      <Title
        type={props.type}
        hide={
          props.isMobile && (props.type === "cart" || props.type === "bell")
        }
      >
        {props.type === "cart"
          ? "Cart"
          : props.type === "account"
          ? "Account"
          : props.type === "bell"
          ? "Notifications"
          : "Club O"}
      </Title>
    </Wrapper>
  );
}
const Wrapper = Styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    margin: 0 12px;
    cursor: pointer;
    height: 34px;
    font-size: 25px;
    /* display: ${(props) => (props.hide ? "none" : "flex")}; */
    display: ${(props) =>
      props.type === "account" || props.type === "Try" ? "none" : "flex"};
    @media ${(props) => props.theme.tabletL} {
        display: flex;
        font-size: 40px;
        justify-content: space-between;
}

`;

const Title = Styled.div`
    font-size: 12px;
    height: 10px;
    color: #2f3337;
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    /* display: ${(props) => (props.hide ? "none" : "flex")}; */
    display: ${(props) =>
      props.type === "cart" || props.type === "bell" ? "none" : "flex"};
    @media ${(props) => props.theme.mobileXL} {
        display: flex;
}

`;

const CartIcon = Styled.div`
position: relative;
/* height: 100%; */
width: 100%;
font-size: 25px;
height: 34px;

`;

const CartNumber = Styled.p`
position:absolute;
font-size: 12px;
color: #c7202c;
font-weight: 600;
top: 32%;
    left: 58%;
    transform: translate(-50%, -50%);
    @media ${(props) => props.theme.mobileXL} {
        top: 21%;
    left: 56%;
    }
`;
