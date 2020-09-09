import React, {useState,useEffect} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormFile from 'react-bootstrap/FormFile';
import items from '../data.json'



const Menu = (props)=> {

const[checked ,setchecked]=useState(false)


const addToOrder=(x)=>{
    if (checked === false){
        alert (x)
setchecked(true)
    }
    else{
        alert(`removing ${x} from the order`)
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