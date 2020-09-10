import React,{createContext,useState} from 'react';

export const  cartContext = createContext();

const CartContextProvider = (props) => {
    
    const[cart, setCart]=useState(0)

    const incrementCart=()=>{
        setCart(cart++)
    }
    const decrementCart=()=>{
        setCart(cart--)
    }

    return(
        <cartContext.Provider value={{cart,incrementCart,decrementCart}}>

        {props.children}

        </cartContext.Provider>
     )
    }
    
    export default CartContextProvider