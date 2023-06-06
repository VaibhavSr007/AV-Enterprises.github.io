import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import { Announcements } from '../components/Announcements'
import { Footer } from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../Responsive'
import { useLocation } from 'react-router-dom'
import { publicRequest, userRequest } from '../requestMethod'
import axios from 'axios'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux';

const Container = styled.div`
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({flexDirection: "column"})}
`

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Image = styled.img`
  width: 60%;
  // height: 90vh;
  object-fit: cover;
`

const InfoContainer = styled.div`

  flex: 1;
  padding: 20px 50px;
  
`
const Title = styled.h1`
  font-weight: 600;
  ${mobile({textAlign: "center"})}
`
const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({textAlign: "center"})}
`
const Price = styled.p`
  font-weight: 400;
  font-size: 40px;
  ${mobile({textAlign: "center"})}
`
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
  ${mobile({ width: "100%"})};
`

const AmmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Ammount= styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`

export const ProductSingle = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1)
  // console.log(id);
  const dispatch = useDispatch();
  useEffect( ()=>{
    const getProduct = async ()=>{
      try{
        const res = await userRequest.get(`/products/find/${id}`);
        setProduct(res.data);
        // console.log(res.data);
      }
      catch{}
    }
    getProduct();
  },[id])

  const handleQnty = ( (type)=>{
    if(type === "dec"){
      quantity > 1 && setQuantity(quantity-1);
    }
    else if(type === "inc"){
      setQuantity(quantity+1);
    }
  })

  const handleClick = ()=>{
    // update cart
    dispatch(
      addProduct({...product,quantity})
    )
  }
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
          <ImgContainer>
            <Image src={product.img}/>
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>₹ {product.price}</Price>
            <AddContainer>
                <AmmountContainer>
                  <Remove style={{cursor: 'pointer'}} onClick={()=> handleQnty("dec")} />
                  <Ammount>{quantity}</Ammount>
                  <Add style={{cursor: 'pointer'}} onClick={()=> handleQnty("inc")}/>
                </AmmountContainer>

                <Button onClick={handleClick}>ADD TO CART</Button>
            </AddContainer>
            
          </InfoContainer>
        </Wrapper>
        <Footer/>
    </Container>
  ) 
}
