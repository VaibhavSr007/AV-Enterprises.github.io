import React from 'react'
import styled from 'styled-components';
import vc_super from "./static/vc_super.jpg"
import aq_nri from "./static/aq_nri.png"
import { mobile } from '../Responsive';
import {Link} from 'react-router-dom'


const Container = styled.div`
    display: flex;
    padding: 50px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: "column" })};
`
const Items = styled.div`
    flex: 1;
    height: 70vh;
    margin: 10px;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 10px;
    
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    fond-weight: 600;
`


export const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Items>
                    <Image src={item.img} />
                    <Info>
                        <Title>{item.title}</Title>
                        <Button>SHOP NOW</Button>
                    </Info>
                </Items>
            </Link>

            {/* <Link to={`/products/vaccum_cleaner`}>
                <Items>
                    <Image src={vc_super} />
                    <Info>
                        <Title>Vaccum Cleaner</Title>
                        <Button>SHOP NOW</Button>
                    </Info>
                </Items>
            </Link> */}

        </Container>
    )
}
export default CategoryItem;