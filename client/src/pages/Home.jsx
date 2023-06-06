import React from 'react'
import { Announcements } from '../components/Announcements'
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider'
import { Categories } from '../components/Categories'
import { ProductAll } from '../components/ProductAll'
import { Footer } from '../components/Footer'
import CategoryItem from '../components/CategoryItem'
import { Link , Navigate} from 'react-router-dom'



export default function Home() {
  const user = JSON.parse(localStorage.getItem('persist:root'))
  const current = JSON.parse(user.user)
  console.log(current.currentUser)
  if(!current.currentUser){
    return(
      <Navigate to="login"/>
    )
    
  }
  return (
    <div>
        <Announcements/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <ProductAll/>
        <Footer/>
    </div>
  )
}
