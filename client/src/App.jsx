import { Cart } from "./pages/Cart";
import Home  from "./pages/Home";
import { Login } from "./pages/Login";
import { ProductSingle } from "./pages/ProductSingle";
import { ProductsList } from "./pages/ProductsList";
import { Register } from "./pages/Register";
import { PaymentSuccess } from "./pages/PaymentSuccess";
import{ Route, Navigate, BrowserRouter as Router, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state=> state.user.currentUser);
  return  (<Router>

      <Routes>
        <Route exact path = "/" element={<Home />} /> { /* this will route to home */}
          
        <Route  path = "/products/:category" element={<ProductsList />} />  { /* this will route any category of product */}

        {/* <Route  path = "/products/" element={<ProductsList />} />  */}
          
        <Route  path = "/product/:id" element={<ProductSingle />} />  { /* this will route single product by its id */}
          
        <Route  path = "/cart" element= {<Cart/>} />  { /* this will route product by its id */}
          
        <Route  path = "/login" element={user ? <Navigate to = "/" /> : <Login/>} />  { /* this will route login */}
          
        <Route path = "/success" element = {<PaymentSuccess/>}/>

        <Route  path = "/register" element={user ? <Navigate to = "/" /> : <Register/>} />  { /* this will route register*/}

      </Routes>
  </Router>)
};

export default App;