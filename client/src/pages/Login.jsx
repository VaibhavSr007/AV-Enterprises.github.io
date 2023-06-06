import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/apiCalls'
import { Navigate } from 'react-router'
import img from '../static/logo.png'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right, #4ca1af, #c4e0e5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    border-radius: 20px;
    background-color: white;
    ${mobile({width: "75%"})}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;

`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px ;
    padding: 10px;
`


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Error = styled.span `
    color: red;
`

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state) => state.user);

    const handleClick = (e) =>{
         e.preventDefault();
         login(dispatch, {username, password}) ;
    }

    const handleRegister = (e) =>{
        <Navigate to='/register'/>
    }
    return (
        <Container>
            <img style={{width: '120px', borderRadius: '50%', marginBottom: '12px'}} src={img} alt="" />
            <h1 style={{marginBottom: '30px', fontSize: '50px', fontWeight: '5'}}>Welcome to AV Enterprises</h1>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="username"  onChange={(e) => setUsername(e.target.value)}/>
                    <Input type='password' placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Button onClick={handleClick}>LOGIN</Button>
                    {error && <Error> Something went Wrong</Error>}
                    <Link onClick={handleRegister}>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}
