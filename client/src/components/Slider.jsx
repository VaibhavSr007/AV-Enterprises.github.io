import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components';
import blaze_ro from './static/blaze_ro.jpg';
import aq_new from './static/aq_new.png';
import aq_edge from './static/aq_edge.png';
import { useState } from 'react';
import { mobile, tablet } from '../Responsive';
import { ProductAll } from './ProductAll';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;  /* position relative for all parents whose child is position abslolute */
    overflow: hidden;
    ${mobile({display: "none"})};
    ${tablet({display: "none"})};
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);

`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  padding: 60px 60px;
  flex: 1;
`;

const Image = styled.img`
  margin-top: 25px;
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;


export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };

    return (
        <div>
            <Container>
                <Arrow direction="left"  onClick={() => handleClick("left")}>
                    <KeyboardArrowLeftOutlined />
                </Arrow>

                <Wrapper slideIndex={slideIndex}>
                    <Slide>
                        <ImgContainer>
                            <Image src={blaze_ro}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>FLASH SALE</Title>
                            <Desc>FLASH SALE!! GET FLAT 40% OFF ON POPULAR PURIFIERS</Desc>
                            <a href="http://localhost:3000/products/water_purifier">
                            <Button>SHOP NOW</Button>
                            </a>
                        </InfoContainer>
                    </Slide>

                    <Slide>
                        <ImgContainer>
                            <Image src={aq_new}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>SUMMER SALE</Title>
                            <Desc>SUMMER SALE!! GET FLAT 30% OFF ON EXCHANGE OFFERS</Desc>
                            <a href="http://localhost:3000/products/vacuum_cleaner">
                            <Button>SHOP NOW</Button>
                            </a>
                        </InfoContainer>
                    </Slide>

                    <Slide>
                        <ImgContainer>
                            <Image src={aq_edge}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>SPECIAL OFFERS</Title>
                            <Desc>SPECIAL OFFERS!! AMAZING DISCOUNTS DON'T MISS THE CHANCE</Desc>
                            <a href="http://localhost:3000/products/water_purifier">
                            <Button>SHOP NOW</Button>
                            </a>
                        </InfoContainer>
                    </Slide>
                </Wrapper>

                <Arrow direction="right"  onClick={() => handleClick("Right")}>
                    <KeyboardArrowRightOutlined />
                </Arrow>
            </Container>
        </div>
    )
}










// const Slider = () => {
//     return (
//
//     )
// }

// export default Slider