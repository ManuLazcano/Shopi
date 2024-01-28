import React from "react";
import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({children}) {
    const [shoppingCartCounter, setShoppingCartCounter] = useState(0);
    const [productsInShoppingCart, setProductsInShoppingCart] = useState([]);    

    const addProductToShoppingCart = (product) => {        
        setShoppingCartCounter(prevCounter => prevCounter + 1);
        setProductsInShoppingCart([...productsInShoppingCart, product]);
    };
    
    const updateProductsInShoppingCart = (updatedProducts) => {
        removeProductFromShoppingCart();
        setProductsInShoppingCart(updatedProducts);
    };  
    const removeProductFromShoppingCart = () => {
        setShoppingCartCounter(prevCounter => prevCounter - 1);
    };  
    
    return ( 
        <React.Fragment>
            <ShoppingCartContext.Provider value={{
                shoppingCartCounter,
                addProductToShoppingCart,            
                productsInShoppingCart,
                updateProductsInShoppingCart,
                setShoppingCartCounter
            }}>
                {children}
            </ShoppingCartContext.Provider>
        </React.Fragment>
    );
}

export { ShoppingCartProvider, ShoppingCartContext };