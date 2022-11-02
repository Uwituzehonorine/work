import React from 'react'
import { BrowserRouter, Route, RouterProvider , Switch} from 'react-router-dom'
import Products from '../Products/Products'
import Signup from '../Signup/Signup'
import Cart from '../Cart/Cart'
const Routes = ({
  productItems, 
  cartItems, 
  handleAddProduct, 
  handleRemoveProduct,
  handleCartClearance
}) => {
  return (
    <div>
        <Switch>
        
           <Route path='/' exact>
            <Products productItems=
            {productItems} 
            handleAddProduct={handleAddProduct}/>
           </Route>
           
           <Route path='/signup' exact>
            <Signup />
           </Route>
           <Route path='/Cart' exact>
            <Cart cartItems={cartItems} 
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance}

            
            />

           </Route>
          </Switch>
    </div>
  )
}

export default Routes