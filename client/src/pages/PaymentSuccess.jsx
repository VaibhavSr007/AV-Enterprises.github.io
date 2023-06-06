
import React from 'react'
import { userRequest } from '../requestMethod';
import {  useState } from "react";
import { Link } from 'react-router-dom';

export function PaymentSuccess() {
  const checkout = JSON.parse(sessionStorage.getItem("checkout"))
  const cart = JSON.parse(sessionStorage.getItem("cart"))
  const userData = JSON.parse(localStorage.getItem("persist:root"))
  const currentUser = JSON.parse(userData.user).currentUser
  async function CreateOrder() {
    try {
      let res = await userRequest.post("/orders", {
        UserOrderId: currentUser._id,
        products: cart.products.map((item) => ({
          productId: item._id,
          quantity: item._quantity,
        })),
        amount: cart.total,
        address: checkout.card.address_city,
      });
      const elem = document.getElementById("textchange")
      elem.innerText = res.data._id
      } catch (e) {
      console.log(e)
    }
  }
  CreateOrder()

  return (       
        <div 
          style={{
                    background: 'linear-gradient(to right, #4ca1af, #c4e0e5)',
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
        >
          Order Successful!! Thank you for shopping with us :) Your order id is: <span id="textchange"></span>
          <Link to="/">
           <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
         </Link>
          </div>
      )
}

