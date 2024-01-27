import { XCircleIcon } from '@heroicons/react/24/solid';

import React from 'react';
import { CheckoutSideMenuContext } from '../../Contexts/CheckoutSideMenuContext';
import { ShoppingCartContext } from '../../Contexts/ShoppingCartContext';
import { OrderProduct } from '../OrderProduct';
import { totalPrice } from '../../utilis/totalPrice';

function CheckoutSideMenu() {
    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,    
    } = React.useContext(CheckoutSideMenuContext);

    const { productsInShoppingCart, updateProductsInShoppingCart } = React.useContext(ShoppingCartContext);

    const removeProduct = (id) => {
        const filteredProducts = productsInShoppingCart.filter(product => product.id != id);
        updateProductsInShoppingCart(filteredProducts);
    };

    return (
        <React.Fragment>
            <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-68px)] flex-col overflow-y-auto fixed top-[68px] right-0 border border-black rounded-lg bg-white`}>
                <section>
                    <div className="flex justify-between items-center p-6">
                        <h2 className="font-medium text-xl">My order</h2>
                        <span>
                            <XCircleIcon onClick={() => closeCheckoutSideMenu()} className="h-6 w-6 text--black cursor-pointer" />    
                        </span>                        
                    </div>
                    <section className="px-6">
                        {productsInShoppingCart.map(product => (
                            <OrderProduct 
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                image={product.image}                                
                                removeProduct={removeProduct}
                            />
                        ))}                                  
                    </section>
                    <div className="px-6">
                        <p className="flex justify-between items-center">
                            <span className="font-medium">Total:</span>
                            <span className="font-medium text-2xl">${totalPrice(productsInShoppingCart)}</span>
                        </p>
                    </div>
                </section>
            </aside>
        </React.Fragment>
    );
}

export { CheckoutSideMenu };