import React, {useState,useEffect,useContext} from 'react';
import {cartContext} from '../context/cart ';
import Badge from 'react-bootstrap/Badge';

const Cart = ()=> {

const {cart}=useContext(cartContext)

    return(
        <h1>
       Cart<Badge variant="secondary">{cart}</Badge>
      </h1>
    )
}

export default Cart