import {FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import p1 from "./static/aq-sel-ed-br.png"
import p2 from "./static/aq_infi.png"
import p3 from "./static/vc_super_br.png"
import p4 from "./static/aq-royal-br.png"
import p5 from "./static/vc_xprt.png"
import p6 from "./static/aq_enh.png"
import p7 from "./static/vc_sel_br.png"
import p8 from "./static/aq_rapid.png"
import p9 from "./static/aq_superb.png"


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease
` 

const Container = styled.div`
    flex: 1;
    margin: 10px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
` 
const Image = styled.img`
    height: 75%;
    z-index: 2;
` 

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
    
` 

export const Product = ({item}) => {
  return (
    <Container>
        {/* <Prod> */}
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <Link to={`/cart`}>
                    <ShoppingCartOutlined/>
                    </Link>
                </Icon>
                <Icon>
                    {/* {console.log(item._id)} */}
                    <Link to={`/product/${item._id}`}>
                    <Search/>
                    </Link>
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                    <FavoriteBorderOutlined/>
                    </Link>
                </Icon>
            </Info>

    </Container>
  )
}
export default Product;

