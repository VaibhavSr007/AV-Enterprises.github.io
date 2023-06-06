import React from 'react'
import styled from 'styled-components'

const Container  = styled.div`
  background-color: tomato;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`
export const Announcements = () => {
  return (
    <Container>Special Exchange Offer: Upto Flat 50% Off</Container>
  )
}
