import React, {useState,useEffect,useContext} from 'react';
import {orderContext} from '../context/order';
import Button from 'react-bootstrap/Button';

const OrderBtn = ()=> {

    const { order, updateOrder } = useContext(orderContext)

    const displayOrder =()=>{
        alert(order.split().join().replace(',',' '))
    }

    return(
        <Button variant="primary" size="lg" active onClick={displayOrder}>
         Place Order
      </Button>
    )
}

export default OrderBtn