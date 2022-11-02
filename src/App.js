import React, { useState } from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header';
import Routes from './components/front/Routes/Routes';
import '../node_modules/font-awesome/css/font-awesome.min.css'
const App = () => {
  const {productItems} = data;
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (product)=>{
    const productExist = cartItems.find((item) => item.id=== product.id);
    if(productExist){
      setCartItems(cartItems.map((item)=>item.id=== product.id ?
        {...productExist, quantity:productExist.quantity + 1}: item
      ));
    }
      else {
        setCartItems([...cartItems, {...product, quantity: 1}])
      }


    };
    
    const handleRemoveProduct =(product)=>{
      const productExist = cartItems.find((item) => item.id=== product.id);
         if(productExist.quantity === 1){
          setCartItems(cartItems.filter((item) =>item.id!==product.id))
         }else{
          setCartItems(
            cartItems.map((item)=>
            item.id === product.id
             ? {...productExist,quantity:productExist.quantity - 1} 
             :item
             )
          );
         }
    };
    const handleCartClearance=()=>{
      setCartItems([]);

    }

  
  
  return (
   <>
   <Router>
   <Header cartItems={cartItems} />
   <Routes productItems={productItems} 
   cartItems={cartItems} 
   handleAddProduct={handleAddProduct}
   handleRemoveProduct={handleRemoveProduct}
   handleCartClearance={handleCartClearance}
   />
   </Router>
   
   
   </>
  )
}

export default App