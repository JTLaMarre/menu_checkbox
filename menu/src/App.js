import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/menu';
import OrderBtn from './components/orderBtn';
import items from './data.json'
import './App.css';
import OrderContextProvider from '../src/context/order';
import CartContextProvider from '../src/context/cart ';
import Cart from './components/cart';


function App() {
  
  return (
    <CartContextProvider>
    <OrderContextProvider>
     <div>
     <Cart/>
       {items.map((item)=>{
         return(
           <Menu key={item.id} name={item.name} price={item.price}/>
         )
       })}
       <OrderBtn/>
     </div>
    </OrderContextProvider>
    </CartContextProvider>
    
  );
}

export default App;
