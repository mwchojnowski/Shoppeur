import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { VscBell } from "react-icons/vsc";
import Cart from "../../public/Cart_Icon.svg";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";

export default function NavOption({ type, isTablet, isMobile, url }) {
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    let localCart = JSON.parse(localStorage.getItem("Cart")) || [];
    setCartItems(localCart.length);
  }, []);
  return (
    <Link href={url} passHref>
      <Wrapper
        type={type}
        hide={isTablet && (type === "account" || type === "Try")}
      >
        {type === "cart" ? (
          <>
            <Cart /> <CartNumber>{cartItems}</CartNumber>
          </>
        ) : type === "account" ? (
          <BsPerson />
        ) : type === "bell" ? (
          <VscBell />
        ) : (
          <BsPerson />
        )}
        <Title
          type={type}
          hide={isMobile && (type === "cart" || type === "bell")}
        >
          {type === "cart"
            ? "Cart"
            : type === "account"
            ? "Account"
            : type === "bell"
            ? "Notifications"
            : "Club O"}
        </Title>
      </Wrapper>
    </Link>
  );
}
const Wrapper = styled.a`
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
  text-decoration: none;
  color: inherit;
  @media ${(props) => props.theme.tabletL} {
    display: flex;
    font-size: 40px;
    justify-content: space-between;
  }
`;

const Title = styled.div`
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

const CartIcon = styled.div`
  position: relative;
  /* height: 100%; */
  width: 100%;
  font-size: 25px;
  height: 34px;
`;

const CartNumber = styled.p`
  position: absolute;
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