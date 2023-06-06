import { blue } from '@material-ui/core/colors'
import { Email, Facebook, Instagram, PhoneAndroid, Pinterest, Room } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from '../Responsive'

// left ans its components starts here
const Container = styled.div`
    display: flex;
    background-color: #E0FFFF;
    ${tablet({ flexDirection: "column" })}
`
const Logo = styled.h1`

`
const Desc = styled.p`
    padding: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
    margin-left: 80px;
    margin-top: 30px;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`


const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

// center ans its components starts here
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`


// right ans its components starts here
const Right = styled.div`
    flex: 1;
    padding: 0px 20px;
    ${tablet({ backgroundColor: "lightgray" })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center
`
export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>AV Enterprises</Logo>
                <Desc>
                    AV Enterprises is the only authorized franchise of Eureka Forebes (Aquaguard) Ltd. in the city. It provides the sales and services of both the Aquaguard water purifier and Vacuum Cleaners. In case of any service requirement or any consulting feel free to contact through the given contact details. Doorstep demo of the product is also available, if the customer wants can book it by contacting through the given contact details.
                </Desc>

            </Left>

            <Center>
                <Title>Usefull Links</Title>
                <List>

                    <ListItem><a style={{ textDecoration: "none", color: 'black' }} href="http://localhost:3000/">Home</a></ListItem>
                    <ListItem><a style={{ textDecoration: "none", color: 'black' }} href="http://localhost:3000/products/water_purifier">Water Purifiers</a></ListItem>
                    <ListItem><a style={{ textDecoration: "none", color: 'black' }} href="http://localhost:3000/products/vacuum_cleaner">Vacuum Cleaner</a></ListItem>
                    <ListItem><a style={{ textDecoration: "none", color: 'black' }} href="http://localhost:3000/cart">Cart</a></ListItem>

                    <SocialContainer>
                        <SocialIcon style={{ backgroundColor: `#3B5999` }}>
                            <Facebook />
                        </SocialIcon>
                        <SocialIcon style={{ backgroundColor: `#E4405F` }}>
                            <Instagram />
                        </SocialIcon>
                        <SocialIcon style={{ backgroundColor: `#E60023` }}>
                            <Pinterest />
                        </SocialIcon>
                    </SocialContainer>

                </List>
            </Center>

            <Right>
                <Title style={{ marginTop: `20px` }}>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> Prabhu Town Chauraha, Raebareli UP(229001)
                </ContactItem>
                <ContactItem>
                    <PhoneAndroid style={{ marginRight: "10px" }} /> +91 9792933331
                </ContactItem>
                <ContactItem>
                    <Email style={{ marginRight: "10px" }} /> pawan.123@rediffmail.com
                </ContactItem>
            </Right>
        </Container>
    )
}
