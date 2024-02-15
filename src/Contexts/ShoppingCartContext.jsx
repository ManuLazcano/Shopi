import React, { createContext, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({children}) {    
    const [productsInShoppingCart, setProductsInShoppingCart] = useState([]);    

    const addProductToShoppingCart = (product) => {                
        setProductsInShoppingCart([...productsInShoppingCart, product]);
    };
    
    const updateProductsInShoppingCart = (updatedProducts) => {        
        setProductsInShoppingCart(updatedProducts);
    };  
    
    return (     
        <ShoppingCartContext.Provider value={{                
            productsInShoppingCart,
            addProductToShoppingCart,            
            updateProductsInShoppingCart,                
        }}>
            {children}
        </ShoppingCartContext.Provider>        
    );
}

export { ShoppingCartProvider, ShoppingCartContext };