import React, {useState,useEffect,useContext} from 'react';
import {cartContext} from '../context/cart ';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = ()=> {

const {cart}=useContext(cartContext)
const cartIcon = <FontAwesomeIcon icon={faShoppingCart} size={70} />
    return(
        <div>
        <h3>
       {cartIcon}
       <span>
        <Badge pill variant="danger">{cart}</Badge>
        </span>
      </h3>
        </div>
    )
}

export default Cart