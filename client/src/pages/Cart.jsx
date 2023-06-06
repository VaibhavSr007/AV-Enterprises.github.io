import { Add, Remove } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Announcements } from '../components/Announcements'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { mobile } from '../Responsive'
import p1 from "../static/logo.png"
import { useSelector } from 'react-redux'
import StripeCheckout from "react-stripe-checkout"
import { userRequest } from '../requestMethod'
import { useNavigate } from "react-router";
import axios from 'axios'
import { Link, unstable_HistoryRouter } from 'react-router-dom'

// const KEY = process.env.REACT_APP_KEY;
const KEY = "pk_test_51MsMzFSDDtO7fKOeoUxPWU3bOMbyfPtWNMymRcN1yzeclEbZmVTy5AltLJkraEo8kW7mFX38y2ahnV46PJpUbstf00meoyTJzH";

const Container = styled.div`
`

const Wrapper = styled.div`
  padding: 20px;
  
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=> props.type === "filled" && "none"};
    background-color: ${props=>props.type==="filled" ? "black" : "transparent"};
    color: ${props=> props.type === "filled" && "white"};
`

const Toptext = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    ${mobile({ display: "none"})}
`

const TopTexts = styled.div`
    
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    ${mobile({ flexDirection: "column"})}
`


const Info = styled.div`
     flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin:30px;
    ${mobile({ flexDirection: "column"})}
`

const ProductDetail = styled.div`
    flex:2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
    ${mobile({ width: "70%"})}
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`
const ProductName = styled.span`
`
const ProductId = styled.span`
`
const ProductCategory = styled.span`
`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductQtyContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${mobile({ marginTop: "15px"})}
`
const ProductQty = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px"})}
`
const Productprice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Summary = styled.div`
    flex: 1;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 400;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type === "total" && "500"};
    font-size: ${props=> props.type === "total" && "24px"};

`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`


export const Cart = () => {
    
    const cart = useSelector(state=> state.cart);
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate();

    const onToken = (token)=>{
        // console.log(token);
        sessionStorage.setItem("checkout",JSON.stringify(token))
        sessionStorage.setItem("cart",JSON.stringify(cart))
        setStripeToken(token);
    }

    useEffect(()=>{
        const makeRequest = async()=>{
            try{
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 500,
                  });
                  navigate("/success", {
                    stripeData: res.data,
                    products: cart, });
            }catch{}
        }
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate])

  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <Title>YOUR CART</Title>
            <Top>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/">
                <TopButton>CONTINUE SHOPPING</TopButton>
            </Link>
                <TopTexts>
                    <Toptext>Shopping Bag({cart.products.length})</Toptext>
                    {/* <Toptext>Your Wishlist</Toptext> */}
                </TopTexts>
                <StripeCheckout
                        name="AV Enterprises"
                        image = {p1}
                        billingAddress
                        shippingAddress
                        description={`Your total is ₹${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <TopButton type="filled">CHECKOUT NOW</TopButton>
                </StripeCheckout>
                
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map(product =>( <Product>
                        <ProductDetail>
                            <Image src={product.img}></Image>
                            <Details>
                                <ProductName><b>Product:</b> {product.title}</ProductName>
                                <ProductId><b>ID:</b> {product._id}</ProductId>
                                <ProductCategory><b>Category:</b> {product.category[0]}</ProductCategory>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductQtyContainer>
                                <ProductQty>Product Qnty: {product.quantity}</ProductQty>
                            </ProductQtyContainer>
                            <Productprice>₹ {product.price * product.quantity}</Productprice>
                        </PriceDetail>
                    </Product>
                     ))}
                     
                </Info>

                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Service and Installation</SummaryItemText>
                        <SummaryItemPrice>₹ 500</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Service and Installation Discount</SummaryItemText>
                        <SummaryItemPrice>₹ -500</SummaryItemPrice>
                    </SummaryItem>
                    <hr />
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                        name="AV Enterprises"
                        image = {p1}
                        billingAddress
                        shippingAddress
                        description={`Your total is ₹${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <Button>CHECKOUT NOW</Button>
                    </StripeCheckout>
                </Summary>

            </Bottom>

        </Wrapper>
        <Footer/>
    </Container>
  )
}
