import React,{createContext,useState} from 'react';

export const  orderContext = createContext();

const OrderContextProvider = (props) => {
    
    const[order, setOrder]=useState('')

    const updateOrder=(value)=>{
        setOrder(value)
    }

    return(
        <orderContext.Provider value={{order,updateOrder}}>

        {props.children}

        </orderContext.Provider>
     )
    }
    
    export default OrderContextProvider

