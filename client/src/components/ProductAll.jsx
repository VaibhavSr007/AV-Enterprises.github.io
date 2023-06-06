import {FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React, { useEffect , useState} from 'react'
import Product from "./Product";
import axios from 'axios'
import styled from 'styled-components'
import { userRequest } from '../requestMethod';

const Container = styled.div`
    display: flex;
    padding: 50px;
    justify-content: space-between;
    flex-wrap: wrap;
` 

export const ProductAll = ({cat}) => {
    const [products, setProducts] = useState([]);
    
    useEffect( ()=>{
        const getProducts = async ()=>{
            try{
                const res = await userRequest.get(
                    cat
                      ? `products?category=${cat}`
                      : "products",
                      );
                setProducts(res.data);
                // console.log(res.data);
            }catch(err){}
        }
        getProducts();
    },[cat]);

    
  return (
    <Container>
        
        {cat
        ? products.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 6)
            .map((item) => <Product item={item} key={item.id} />)}
        
    </Container>
  )
}
