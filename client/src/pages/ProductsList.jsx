import React, { useState } from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import { Announcements } from '../components/Announcements'
import { ProductAll } from '../components/ProductAll'
import { Footer } from '../components/Footer'
import { mobile } from '../Responsive'
import { useLocation } from 'react-router-dom'


const Container = styled.div`

`

const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})};
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0px"})};
`

const Option = styled.option`

`

export const ProductsList = () => {
    const location = useLocation();
    const cat = (location.pathname.split('/')[2]);
    const a = cat.split('_')[0].toUpperCase();
    const b = cat.split('_')[1].toUpperCase();
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Title>{a +" "+ b}</Title>
        <FilterContainer>
            
            {/* <Filter>
            {/* <button><a href="http://localhost/5000/products/?category=water_purifier">Water Purifiers</a></button> */}
                {/* <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled >Category</Option>
                    <Option>Water Purifiers</Option>
                    <Option>Vacuum Cleaners</Option>
                </Select> */}
            {/* </Filter>
            <Filter> */}
            {/* <button><a href="http://localhost/3000/products/vacuum_cleaner">Vacuum Cleaner</a></button> */}
                {/* <FilterText>Sort Products:</FilterText>
                <Select onChange={ (e)=> setSort(e.target.value)}>
                    <Option value="popular">Popular</Option>
                    <Option value="desc">Price High to Low</Option>
                    <Option value="asc">Price Low to High</Option>
                </Select> */}
            {/* </Filter> */} 
        </FilterContainer>
        <ProductAll cat={cat} />
        <Footer/>
    </Container>
  )
}
