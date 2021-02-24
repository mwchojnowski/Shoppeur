import React from "react";
import styled from "styled-components";
import ShopNowCard from "./ShopNowCard";
import SaleCard from "./SaleCard";

const CategoryGrid = ({ type, data }) => {
  const saleData = [
    {
      url: "",
      img: "https://ak1.ostkcdn.com/img/mxc/sales_deals_20200819.svg",
    },
    {
      url: "",
      img: "https://ak1.ostkcdn.com/img/mxc/20200824-flash-deals-logo.svg",
    },
    {
      url: "",
      img: "https://ak1.ostkcdn.com/img/mxc/clearance_logo_20200819.svg",
    },
  ];
  return (
    <Wrapper>
      <MainCont>
        {type === "SHOPNOW" &&
          data.map((info) => (
            <ShopNowCard key={info.id} data={info} mb={"50px"} />
          ))}
        {type === "SALE" &&
          saleData.map((info, i) => (
            <SaleCard
              key={info.url}
              data={info}
              mb={"10px"}
              last={i === saleData.length - 1}
            />
          ))}
      </MainCont>
    </Wrapper>
  );
};

export default CategoryGrid;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0px -8px;
  margin-bottom: 50px;
  @media ${(props) => props.theme.tablet} {
    margin: 0px -16px;
    margin-bottom: 50px;
  }
`;
const MainCont = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  @media ${(props) => props.theme.tablet} {
    flex-wrap: nowrap;
  }
`;