import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import SearchBar from "./NavBar/SearchBar";
import NavOption from "./NavBar/NavOption";
import SideMenu from "./NavBar/SideMenu";

export default function Navbar() {
  const [windowDimension, setWindowDimension] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(function onFirstMount() {
    function onScroll(text) {
      let innerWidth = text.srcElement.window.innerWidth;
      console.log("th ", text.srcElement.window.innerWidth, isTablet);
      if (innerWidth < 970 && isTablet === false) {
        setIsTablet(true);
        console.log("trueo");
      }
      if (innerWidth > 970 && isTablet === true) {
        setIsTablet(false);
        console.log("falso");
      }
      if (innerWidth < 540 && !isMobile) {
        setIsMobile(true);
        console.log("trueo");
      }
      if (innerWidth > 540 && isMobile) {
        setIsMobile(false);
        console.log("falso");
      }
    }

    window.addEventListener("resize", onScroll);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onOpenMenu = () => {
    setOpenMenu(true);
    console.log("open", openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <Wrapper>
      {/* <NavsWrapper> */}
      <Container>
        <SideMenu isOpen={openMenu} onClose={() => closeMenu()} />
        <MenuIcon onClick={() => setOpenMenu(true)}>
          {" "}
          <FiMenu />{" "}
        </MenuIcon>
        <LogoTag>
          <SmallLogo src={"/Overstock_Icon.svg"} />
          <Logo src={"/Overstock_Logo.svg"} />
        </LogoTag>
        <SearchBar />
        <Options>
          <NavOption type="Try" isTablet={isTablet} />
          {/* <NavOption type="account" isTablet={isTablet} /> */}
          <NavOption type="bell" isTablet={isTablet} isMobile={isMobile} />
          <NavOption type="cart" isTablet={isTablet} isMobile={isMobile} />
        </Options>
      </Container>
      {/* <NavCategories /> */}
      {/* </NavsWrapper> */}
    </Wrapper>
  );
}
const Wrapper = Styled.div`
    width:100%;
    height:67px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    font-family: 'Helvetica', 'Arial', sans-serif;
    background-color:white;
    /* background: green; */
    max-width: 1680px;
    z-index: 10;
    /* margin: 0 auto; */
    @media ${(props) => props.theme.tabletL} {
    height: unset;
  }
`;

const NavsWrapper = Styled.div`
width: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 13px;
    margin-right: 13px;
`;

const Container = Styled.div`
    width:100%;
    margin-left: 13px;
    margin-right: 13px;
    margin: 24px auto;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    /* background-color: red; */
    /* @media ${(props) => props.theme.mobileL} {

margin-left: 25px;
margin-right: 25px;
}
@media ${(props) => props.theme.tablet} {
    margin-left: 50px;
    margin-right: 50px;
  } */
    @media ${(props) => props.theme.laptop} {
    margin-right: 20px;
    margin-left: 20px;
  }


`;

const LogoTag = Styled.a`
margin-right: 16px;
`;

const Logo = Styled.img`
width: 170px;
color: red;
display: none;
/* margin-left: 20px; */
@media ${(props) => props.theme.tabletL} {
        display: flex;
        font-size: 40px;
        justify-content: space-between;
}
`;

const SmallLogo = Styled.img`
width: 35px;
color: red;
display: flex;
@media ${(props) => props.theme.tabletL} {
        display: flex;
        font-size: 40px;
        justify-content: space-between;
        display: none;
}
`;

const Options = Styled.div`
display: flex;
    transition: transform .15s ease-in-out;
    box-sizing: border-box;
    position: relative;
`;

const MenuIcon = Styled.a`
font-size: 30px;
margin-right: 12px;
display: flex;
cursor: pointer;
@media ${(props) => props.theme.tabletL} {
        display: none;
}
`;
