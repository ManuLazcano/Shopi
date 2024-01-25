import { createContext, useState } from "react";
import React from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({children}) {
    const [shoppingCartCounter, setShoppingCartCounter] = useState(0);
    const [productsInShoppingCart, setProductsInShoppingCart] = useState([]);

    const addProductToShoppingCart = (product) => {        
        setShoppingCartCounter(prevCounter => prevCounter + 1);
        setProductsInShoppingCart([...productsInShoppingCart, product]);        
    };
    
    const removeProductFromShoppingCart = () => {
        setShoppingCartCounter(prevCounter => prevCounter - 1);
    };    

    return ( 
        <React.Fragment>
            <ShoppingCartContext.Provider value={{
                shoppingCartCounter,
                addProductToShoppingCart,
                removeProductFromShoppingCart
            }}>
                {children}
            </ShoppingCartContext.Provider>
        </React.Fragment>
    );
}

export { ShoppingCartProvider, ShoppingCartContext };