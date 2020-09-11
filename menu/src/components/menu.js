import React, {useState,useContext} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import {orderContext} from '../context/order';
import {cartContext} from '../context/cart ';



const Menu = (props)=> {

const[checked ,setchecked]=useState(false)
const { order, updateOrder } = useContext(orderContext)
const {incrementCart, decrementCart} = useContext(cartContext)

const addToOrder=(x)=>{
    if (checked === false){
        alert (`adding ${x} to the order`);
        updateOrder(order + x);
        setchecked(true)
        incrementCart()
    }
    else{
        alert(`removing ${x} from the order`);
        updateOrder(order.split(x).join(','));
       setchecked(false)
       decrementCart()
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