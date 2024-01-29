import React from "react";
import { createContext, useEffect, useState } from "react";

const ApiContext = createContext();

function ApiContextProvider ({children}) {
    const BASE_URL = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      fetch(BASE_URL)
        .then(respone => respone.json())
        .then(data => setProducts(data))
        .catch(err => console.error('Ocurrio un error: ', err))
    },[]);

    const [searchByTitle, setSearchByTitle] = useState('');
    console.log(searchByTitle);

    return(
        <React.Fragment>
            <ApiContext.Provider value={{
                products,
                searchByTitle,
                setSearchByTitle
            }}>
                {children}
            </ApiContext.Provider>
        </React.Fragment>
    );
}

export { ApiContextProvider, ApiContext };