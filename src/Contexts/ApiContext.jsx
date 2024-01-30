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
    const [searchByCategory, setSearchByCategory] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    // const filteredProductsByTitle = () => {
    //     return products?.filter(product => product.title.toLocaleLowerCase().includes(searchByTitle.toLocaleLowerCase()));
    // };

    // const filteredProductsByCategory = () => {        
    //     return products?.filter(product => product.category.toLocaleLowerCase().includes(searchByCategory.toLocaleLowerCase()));
    // };

    const filteredProductsBy = (propertyName, searchType) => {
        return products?.filter(product => product[propertyName].toLocaleLowerCase().includes(searchType.toLocaleLowerCase()));
    };

    const filterBy = (filtered, searchType) => {
        if(filtered === 'BY_TITLE') {
            return filteredProductsBy('title', searchType);
        }

        if(filtered === 'BY_CATEGORY') {
            return filteredProductsBy('category', searchType)
        }

        if(filtered === 'BY_TITLE_AND_BY_CATEGORY') {
            return filteredProductsBy('category', searchType).filter(product => product.title.toLocaleLowerCase().includes(searchByTitle.toLocaleLowerCase()));
        }
        
        if(!filtered) {            
            return products;
        }
    };

    useEffect(() => {
        if(searchByTitle && !searchByCategory) setFilteredProducts(filterBy('BY_TITLE', searchByTitle));        
        if(searchByCategory && !searchByTitle) setFilteredProducts(filterBy('BY_CATEGORY', searchByCategory));
        if(searchByCategory && searchByTitle) setFilteredProducts(filterBy('BY_TITLE_AND_BY_CATEGORY', searchByCategory));
        if(!searchByCategory && !searchByTitle) setFilteredProducts(filterBy(null, searchByCategory));        
    },[products, searchByTitle, searchByCategory]);

    return(
        <React.Fragment>
            <ApiContext.Provider value={{
                products,
                searchByTitle,
                setSearchByTitle,
                filteredProducts,
                searchByCategory,
                setSearchByCategory
            }}>
                {children}
            </ApiContext.Provider>
        </React.Fragment>
    );
}

export { ApiContextProvider, ApiContext };