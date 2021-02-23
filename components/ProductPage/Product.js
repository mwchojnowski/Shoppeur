import React, { useState } from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";

function Product({ data }) {
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [quantity, setQuantity] = useState(1);
  const [showColor, setShowColor] = useState(false);
  const productURL =
    "https://ak1.ostkcdn.com/images/products/9273417/Becky-Cameron-Luxury-Ultra-Soft-4-piece-Bed-Sheet-Set-09df3c6e-276b-4f61-afe4-0c0328d63570_600.jpg";

  const images = [
    {
      original:
        "https://ak1.ostkcdn.com/images/products/9273417/Becky-Cameron-Luxury-Ultra-Soft-4-piece-Bed-Sheet-Set-09df3c6e-276b-4f61-afe4-0c0328d63570_600.jpg",
      thumbnail:
        "https://ak1.ostkcdn.com/images/products/9273417/Becky-Cameron-Luxury-Ultra-Soft-4-piece-Bed-Sheet-Set-09df3c6e-276b-4f61-afe4-0c0328d63570_600.jpg",
    },
    {
      original:
        "https://ak1.ostkcdn.com/images/products/9273417/Becky-Cameron-Luxury-Ultra-Soft-4-piece-Bed-Sheet-Set-5dc60df2-1c66-4fe2-b22b-4809c3c4e1d7_600.jpg",
      thumbnail:
        "https://ak1.ostkcdn.com/images/products/9273417/Becky-Cameron-Luxury-Ultra-Soft-4-piece-Bed-Sheet-Set-5dc60df2-1c66-4fe2-b22b-4809c3c4e1d7_80.jpg",
    },
    {
      original:
        "https://ak1.ostkcdn.com/images/products/9273417/Becky-Cameron-Luxury-Ultra-Soft-4-piece-Bed-Sheet-Set-34ff7fd3-5feb-4214-bbe2-237af12e81aa_600.jpg",
      thumbnail:
        "https://ak1.ostkcdn.com/images/products/9273417/Becky-Cameron-Luxury-Ultra-Soft-4-piece-Bed-Sheet-Set-34ff7fd3-5feb-4214-bbe2-237af12e81aa_80.jpg",
    },
    {
      original:
        "https://ak1.ostkcdn.com/images/products/9273417/Becky-Cameron-Luxury-Ultra-Soft-4-piece-Bed-Sheet-Set-c5400fec-a3e3-4f35-abbb-01a63a18e263_600.jpg",
      thumbnail:
        "https://ak1.ostkcdn.com/images/products/9273417/Becky-Cameron-Luxury-Ultra-Soft-4-piece-Bed-Sheet-Set-c5400fec-a3e3-4f35-abbb-01a63a18e263_80.jpg",
    },
  ];
  // items={images.map((info) => {
  //   return { original: info, thumbnail: info };
  // })}
  return (
    <Wrapper>
      <Container>
        <Gallery>
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            thumbnailPosition="left"
          />
        </Gallery>
        <Details>
          <Product__Name>{data.name}</Product__Name>
          <Product__Price>${data.price}</Product__Price>
          {data.sizes.length > 0 && (
            <Size>
              <SubTitle>Size: {size}</SubTitle>
              <ButtonCont>
                {data.sizes.map((info) => (
                  <Button
                    selected={size === info}
                    value={info}
                    key={info}
                    onclick={() => setSize(info)}
                  >
                    {info}
                  </Button>
                ))}
              </ButtonCont>
            </Size>
          )}
          <Color>
            <SubTitle>Color: {color}</SubTitle>
            <Select>
              {data.color.map((info) => (
                <Option>{info.name}</Option>
              ))}
            </Select>
          </Color>
          <Quantity>
            <SubTitle>Quantity:</SubTitle>
            <Select>
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
              <Option>4</Option>
              <Option>5</Option>
              <Option>6</Option>
              <Option>7</Option>
              <Option>8</Option>
              <Option>9</Option>
              <Option>10</Option>
            </Select>
          </Quantity>
          <AddToCart>Add To Cart</AddToCart>
        </Details>
      </Container>
    </Wrapper>
  );
}
export default Product;
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media ${(props) => props.theme.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Gallery = styled.div`
  width: 100%;
  margin-bottom: 50px;
  @media ${(props) => props.theme.tablet} {
    width: 55%;
    margin-bottom: 0px;
  }
  @media ${(props) => props.theme.laptop} {
    width: 60%;
  }
`;

const Gallery__IMG__TEMP = styled.img``;

const Picture = styled.div`
  padding-right: 50px;
`;

const Img = styled.img`
  height: 500px;
  width: 500px;
`;

const Details = styled.div`
  width: 100%;
  @media ${(props) => props.theme.tablet} {
    width: 40%;
  }
  @media ${(props) => props.theme.laptop} {
    width: 35%;
  }
`;

//Details Children Below here

const Product__Name = styled.h1`
  color: #2f3337;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 25px;
`;

const Product__Price = styled.h1`
  color: #2f3337;
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  margin-bottom: 25px;
`;

const Size = styled.div`
  margin-bottom: 25px;
`;

const SubTitle = styled.h1`
  color: #545658;
  font-size: 14px;
  margin-bottom: 10px;
`;
const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Button = styled.button`
  background-color: #fff;
  border-radius: 100px;
  border: 1px solid #2f3337;
  color: #2f3337;
  cursor: pointer;
  display: inline-block;
  font-family: Helvetica;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  max-width: 200px;
  overflow: hidden;
  padding: 4px 16px;
  position: relative;
  text-align: center;
  text-overflow: ellipsis;
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s,
    color 0.3s;
  white-space: nowrap;
  margin-right: 10px;
`;

const Color = styled.div`
  margin-bottom: 25px;
`;

const Color__Title = styled.h1`
  color: #545658;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Select = styled.select`
  align-items: center;
  background-color: #fff;
  border: 1px solid #dadcdf;
  border-radius: 4px;
  color: #545658;
  display: flex;
  font-size: 16px;
  height: 52px;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 2px 17px;
  text-align: left;
  width: 100%;
  margin: 0;
  /////////////////////////////////////// Improved Arrow
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  &:focus {
    background-image: linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
      calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    border-color: green;
    outline: 0;
  }
  /////////////////////////////////////////////End Arrow
`;

const Option = styled.option``;

const Quantity = styled.div`
  margin-bottom: 25px;
`;
const Quantity__Title = styled.h1`
  color: #545658;
  font-size: 14px;
  margin-bottom: 10px;
`;

const AddToCart = styled.button`
  color: white;
  font-size: 16px;
  height: 44px;
  padding: 0 20px;
  background-color: #227553;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: 25px;
`;
