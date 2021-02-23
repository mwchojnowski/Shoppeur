import React from "react";
import styled from "styled-components";
import PageLayout from "../../components/PageLayout";
import Product from "../../components/ProductPage/Product";
import OverView from "../../components/ProductPage/Overview";
import Returns from "../../components/ProductPage/Returns";
import { AllProducts } from "../../data/Category";
export default function ProductPage({ data }) {
  console.log(data);
  return (
    <PageLayout type={"PRODUCT"}>
      <MainCont>
        <Product data={data} />
        <OverView data={data} />
        <Returns />
      </MainCont>
    </PageLayout>
  );
}
// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // Get the paths we want to pre-render based on posts
  const paths = AllProducts.map((info) => ({
    params: { pid: info.id },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  // Pass post data to the page via props
  return { props: { data: AllProducts[params.pid] } };
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
