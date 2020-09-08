import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormFile from 'react-bootstrap/FormFile'


const Menu = (props)=> {

 return(
     <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
     {props.name}     {props.price}
     </InputGroup.Prepend>
    {/* <FormControl aria-label="Text input with checkbox" /> */}
  </InputGroup>
     )   
}

export default Menu