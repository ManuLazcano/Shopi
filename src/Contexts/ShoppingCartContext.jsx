import React from "react";
import { createContext, useState } from "react";

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
        <React.Fragment>
            <ShoppingCartContext.Provider value={{                
                productsInShoppingCart,
                addProductToShoppingCart,            
                updateProductsInShoppingCart,                
            }}>
                {children}
            </ShoppingCartContext.Provider>
        </React.Fragment>
    );
}

export { ShoppingCartProvider, ShoppingCartContext };