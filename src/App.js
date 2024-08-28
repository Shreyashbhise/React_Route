import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
//import About from "./Components/About";

import Navbar from "./Components/Navbar";
import OrderSummary from "./Components/OrderSummary";
import NoMatch from "./Components/NoMatch";
import Products from "./Components/Products";
import FeaturedProducts from "./Components/FeaturedProducts";
import NewProducts from "./Components/NewProducts";
import Users from "./Components/Users";
import UsersDetails from "./Components/UsersDetails";
import Admin from "./Components/Admin";
import Profile from "./Components/Profile";

import { AuthProvider } from "./Components/Auth";
import { Login } from "./Components/Login"; // Correct capitalization
import { RequireAuth } from "./Components/RequireAuth";




const LazyAbout = React.lazy(()=> import('./Components/About'))



function App() {
  return ( 
    <AuthProvider> 
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<React.Suspense fallback='Loading...'><LazyAbout /></React.Suspense>}/>
      <Route path="order-summary" element={<OrderSummary/>}/>
      <Route path="products" element={<Products/>}>
      <Route path="featured" element={<FeaturedProducts />} />
      <Route path="new" element={<NewProducts/>} />
      </Route>
      
      <Route path="users" element={<Users />}>
      <Route path=":userId" element={<UsersDetails/>} />
      <Route path="admin" element={<Admin/>} />
      </Route>
     
       <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} /> 
       <Route path="login" element={< Login/>} /> 

       
      <Route path="*" element={<NoMatch />} />
    </Routes>
    </AuthProvider>
   
  );
}

export default App;
