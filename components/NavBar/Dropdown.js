import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DropdownItem from "./DropdownItem";

export default function Dropdown(props) {
  return (
    <Wrapper
      hasData={
        props.data != null &&
        props.data != [] &&
        props.data != undefined &&
        props.data?.length != 0
      }
      open={props.focused}
    >
      {props.data.map((item, index) => {
        let max = 11;
        if (index > max) return null;
        return <DropdownItem key={item.id} data={item} />;
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 60%;
  position: absolute;
  top: 110%;
  left: 0;
  background-color: white;
  border: 1px solid #dadcdf;
  display: ${(props) => (props.open && props.hasData ? "flex" : "none")};
  flex-direction: column;
`;