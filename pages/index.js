import React from "react";
import PageLayout from "../components/PageLayout";
import JumboSaleDisplay from "../components/Landing/JumboSaleDisplay";
import styled from "styled-components";
import ProductGrid from "../components/Landing/ProductGrid";
import CategoryGrid from "../components/Landing/CategoryGrid";
import { AllProducts } from "../data/Category";
export default function home() {
  let product1 = [
    AllProducts[0],
    AllProducts[3],
    AllProducts[5],
    AllProducts[8],
    AllProducts[10],
    AllProducts[16],
  ];
  let category1 = [
    {
      name: "extra 25% off",
      description: "Select Featured Brand Rugs*",
      img: "https://i.ibb.co/DrZhqLx/ezgif-com-gif-maker-2.jpg",
      url: "/category?type=Rugs",
    },
    {
      name: "extra 15% off",
      description: "Select Kitchen*",
      img: "https://i.ibb.co/s1r4Y0r/01112021-Cat-Silo-Kitchen.jpg",
      url: "/category?type=Kitchen",
    },
    {
      name: "extra 25% off",
      description: "Select Bedding & Bath*",
      img: "https://i.ibb.co/GRgvgcs/02182021-HB4.png",
      url: "/category?type=Bed & Bath",
    },
    {
      name: "extra 25% off",
      description: "Select Home Decor*",
      img: "https://i.ibb.co/rv2tZRH/02182021-HB5.png",
      url: "/category?type=Decor",
    },
    {
      name: "extra 25% off",
      description: "Select Home Improvement*",
      img: "https://i.ibb.co/ZMSS7kY/02182021-HB6.png",
      url: "/category?type=HomeImprovement",
    },
  ];
  let grid1 = [AllProducts[2], AllProducts[10], AllProducts[15]];
  let grid2 = [AllProducts[18], AllProducts[19], AllProducts[20]];
  return (
    <PageLayout type={"HOME"}>
      <JumboSaleDisplay
        url="/category"
        img={"https://i.ibb.co/yysmT17/31a37094e2293c1d6fcce001d50afe55.png"}
        First
      />
      <MainCont>
        <ProductGrid
          title={"Limited Time Deals"}
          type={"CATEGORY"}
          data={category1}
        />
        <ProductGrid
          title={"Things We Know You'll Love"}
          type={"PRODUCT"}
          data={product1}
        />
        <JumboSaleDisplay
          img="https://ak1.ostkcdn.com/img/mxc/shop_by_style_hero_desktop_041619.jpg"
          url="/category?type=BedNBath"
        />
        <CategoryGrid type={"SHOPNOW"} data={grid1} />
        <JumboSaleDisplay
          img="https://ak1.ostkcdn.com/img/mxc/021521-RugsPromo-Desktop.jpg"
          url="/category?type=Rugs"
        />
        <CategoryGrid type={"SHOPNOW"} data={grid2} />
        <CategoryGrid type={"SALE"} />
      </MainCont>
    </PageLayout>
  );
}
const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  justify-content: center;
  padding: 0 24px;
  @media ${(props) => props.theme.laptop} {
  }
`;
