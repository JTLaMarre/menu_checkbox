import React, {useState,useEffect} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormFile from 'react-bootstrap/FormFile';
import items from '../data.json'



const Menu = (props)=> {

const [menuItems,setmenuItems]=useState(items)
const [order, setorder]=useState([])

useEffect(()=>{
    console.log(menuItems)
})

 return(
     <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={()=>{alert(props.name)}} />
     {props.name}     {props.price}
     </InputGroup.Prepend>
    {/* <FormControl aria-label="Text input with checkbox" /> */}
  </InputGroup>
     )   
}

export default Menu