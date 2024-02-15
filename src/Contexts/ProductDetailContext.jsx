import React, { createContext, useState } from "react";

const ProductDetailContext = createContext();

function ProductDetailProvider({children}) {
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    const [productDetail, setProductDetail] = useState({});

    return (
        <React.Fragment>
            <ProductDetailContext.Provider value={{
                isProductDetailOpen,
                openProductDetail,
                closeProductDetail,
                productDetail,
                setProductDetail
            }}>
                {children}
            </ProductDetailContext.Provider>
        </React.Fragment>
    );
}

export { ProductDetailProvider, ProductDetailContext };