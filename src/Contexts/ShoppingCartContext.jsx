import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({children}) {
    const [shoppingCartCounter, setShoppingCartCounter] = useState(0);
    const addProductToShoppingCart = () => {        
        setShoppingCartCounter(prevCounter => prevCounter + 1);
    };
    const removeProductFromShoppingCart = () => {
        setShoppingCartCounter(prevCounter => prevCounter - 1);
    };    

    return ( 
        <ShoppingCartContext.Provider value={{
            shoppingCartCounter,
            addProductToShoppingCart,
            removeProductFromShoppingCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export { ShoppingCartProvider, ShoppingCartContext };