import React from 'react';

import { XCircleIcon } from '@heroicons/react/24/solid';

import { CheckoutSideMenuContext } from '../../Contexts/CheckoutSideMenuContext';
import { ShoppingCartContext } from '../../Contexts/ShoppingCartContext';
import { OrderProduct } from '../OrderProduct';
import { totalPrice } from '../../utilis/totalPrice';
import { Link } from 'react-router-dom';

function CheckoutSideMenu() {
    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        setGroupOrders,
        groupOrders,
    } = React.useContext(CheckoutSideMenuContext);

    const { productsInShoppingCart, updateProductsInShoppingCart } = React.useContext(ShoppingCartContext);

    const removeProduct = (id) => {
        const filteredProducts = productsInShoppingCart.filter(product => product.id != id);
        updateProductsInShoppingCart(filteredProducts);
    };

    const handleCheckout = () => {
        const orderToAdd = {
            date: '28.01.2024',
            products: productsInShoppingCart,
            totalProducts: productsInShoppingCart.length,
            totalPrice: totalPrice(productsInShoppingCart)
        };

        setGroupOrders([...groupOrders, orderToAdd]);
        updateProductsInShoppingCart([]);        
    };

    return (
        <React.Fragment>
            <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-68px)] flex-col overflow-y-auto fixed top-[68px] right-0 border border-black rounded-lg bg-white`}>
                <section className="w-full h-full flex flex-col">
                    <div className="flex justify-between items-center p-6">
                        <h2 className="font-medium text-xl">My order</h2>
                        <span>
                            <XCircleIcon onClick={() => closeCheckoutSideMenu()} className="h-6 w-6 text--black cursor-pointer" />    
                        </span>                        
                    </div>
                    <section className="px-6 flex-1">
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
                    <section className="px-6 mb-6">
                        <p className="flex justify-between items-center">
                            <span className="font-medium">Total:</span>
                            <span className="font-medium text-2xl">${totalPrice(productsInShoppingCart)}</span>
                        </p>
                        <Link to='/my-orders/last'>
                            <button 
                                className="w-full bg-black py-3 text-white rounded-lg mt-2"
                                onClick={() => handleCheckout()} type="button">
                                Checkout
                            </button>                    
                        </Link>
                    </section>                       
                </section>
            </aside>
        </React.Fragment>
    );
}

export { CheckoutSideMenu };