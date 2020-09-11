import React,{createContext,useState} from 'react';

export const  cartContext = createContext();

const CartContextProvider = (props) => {
    
    const[cart, setCart]=useState(0)

    const incrementCart=()=>{
        setCart(cart+1)
    }
    const decrementCart=()=>{
        setCart(cart-1)
    }

    return(
        <cartContext.Provider value={{cart,incrementCart,decrementCart}}>

        {props.children}

        </cartContext.Provider>
     )
    }
    
    export default CartContextProvider