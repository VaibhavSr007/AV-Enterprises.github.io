import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../Responsive';
import { tablet } from '../Responsive';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import img from '../static/logo.png'

const Container = styled.div`
    height: 60px;
    background-color: rgb(43, 209, 212);
    background-color: #E0FFFF;
    ${mobile({height: "55px"})};
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})};
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Center = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:"1.5", justifyContent: "center"})};
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})};
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})};
`

const Logo = styled.h1`
    
    font-weight: bold;
    ${mobile({fontSize: "14px"})};
    ${tablet({fontSize: "18px"})};
`

const MenuItem = styled.div`
    font-size: 12px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "7px"})};
`


export const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    // console.log(quantity)
    const handleClick = async () =>{
        await localStorage.removeItem("persist:root");
        window.location.replace('http://localhost:3000/login');
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='search'/>
                        <Search style={{color: "gray",fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <img style={{width: '42px', borderRadius: '50%'}} src={img} alt="" />
                    <Link style={{ textDecoration: "none", color: 'black' }}  to="/">
                    <Logo>
                    Enterprises.</Logo>
                    </Link>
                </Center>
                <Right>
                    {/* <MenuItem>REGISTER</MenuItem> */} 
                    <Link style={{ textDecoration: "none", color: 'black' }} to="login">
                        <MenuItem  onClick={handleClick}>LOG OUT</MenuItem>
                    </Link>
                    <Link to= "/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

