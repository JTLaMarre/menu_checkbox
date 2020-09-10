import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/menu';
import OrderBtn from './components/orderBtn';
import items from './data.json'
import './App.css';
import OrderContextProvider from '../src/context/order'


function App() {
  
  return (
    <OrderContextProvider>
     <div>
       {items.map((item)=>{
         return(
           <Menu key={item.id} name={item.name} price={item.price}/>
         )
       })}
       <OrderBtn/>
     </div>
    </OrderContextProvider>
    
  );
}

export default App;
