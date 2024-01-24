import { PlusIcon } from '@heroicons/react/24/solid'
import React from 'react';

import { ShoppingCartContext } from '../../Contexts/ShoppingCartContext';
import { ProductDetailContext } from '../../Contexts/ProductDetailContext';

function Card({product}) {
    const { addProductToShoppingCart } = React.useContext(ShoppingCartContext);
    const { openProductDetail, setProductDetail } = React.useContext(ProductDetailContext);

    return (
        <React.Fragment>
            <article 
                onClick={() => {
                    openProductDetail();
                    setProductDetail(product);
                }} 
                className="bg-white cursor-pointer w-56 h-56 rounded-lg shadow-md">
                <figure className="relative mb-2 w-full h-4/5">
                    <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{product.category}</span>
                    <img className="w-full h-full object-contain rounded-lg" src={product?.image} alt={product.title} />
                    <button 
                        className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 shadow-md" type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            addProductToShoppingCart();
                        }}>
                        <PlusIcon />
                    </button>
                </figure>
                <p className="flex justify-between mx-2">
                    <span className="text-sm font-light truncate mr-2">{product.title}</span>
                    <span className="text-lg font-medium">${product.price}</span>
                </p>
            </article>
        </React.Fragment>
    );
}

export { Card };