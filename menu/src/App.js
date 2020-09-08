import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/menu';
import items from './data.json'
import './App.css';
function App() {
  return (
    
     <div>
       {items.map((item)=>{
         return(
           <Menu key={item.id} name={item.name} price={item.price}/>
         )
       })}
     </div>
    
  );
}

export default App;
