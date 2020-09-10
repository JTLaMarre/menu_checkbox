import React, {useState,useEffect,useContext} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import {orderContext} from '../context/order'



const Menu = (props)=> {

const[checked ,setchecked]=useState(false)
const { order, updateOrder } = useContext(orderContext)

const addToOrder=(x)=>{
    if (checked === false){
        alert (`adding ${x} to the order`);
        updateOrder(order + x);
        setchecked(true)
    }
    else{
        alert(`removing ${x} from the order`);
        updateOrder(order.split(x).join(','));
       setchecked(false)
    }
}




 return(
     <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={()=>{addToOrder(props.name)}} />
     {props.name}     {props.price}
     </InputGroup.Prepend>
     </InputGroup>
     )   
}

export default Menu