import React, { useContext } from "react";

import { ShoppingBagIcon } from '@heroicons/react/24/solid'

import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Contexts/ShoppingCartContext";
import { ApiContext } from "../../Contexts/ApiContext";

function Navbar() {
    const {
        shoppingCartCounter
    } = useContext(ShoppingCartContext);
    
    const {
        setSearchByCategory,
        setSearchByTitle
    } = useContext(ApiContext);

    const menuOfLeft = [                
        { to: '/clothes', name: 'clothes'},
        { to: '/electronics', name: 'electronics'},
        { to: '/furnitures', name: 'furnitures'},
        { to: '/toys', name: 'toys'},
        { to: '/others', name: 'others'},
    ];

    const menuOfRigth = [
        { to: '/', name: 'example@gmail.com', className: 'text-black/60'},
        { to: '/my-orders', name: 'My orders'},
        { to: '/my-account', name: 'My occount'},
        { to: '/sign-in', name: 'Sign in' },        
    ]

    const activeStyle = 'underline underline-offset-4';

    return (
        <React.Fragment>
            <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
                <ul className="flex items-center gap-3">
                    <NavLink to='/'>
                        <li 
                            className="font-semibold text-lg"
                            onClick={() => {
                                setSearchByCategory('')
                                setSearchByTitle('');
                            }}>
                            Shopi
                        </li>
                    </NavLink>
                    <NavLink to='/'>
                        <li
                            onClick={() => {
                                setSearchByCategory('')
                                setSearchByTitle('');
                            }}>
                            All
                        </li>    
                    </NavLink>                    
                    {menuOfLeft.map((itemNavbar, index) => (
                        <li 
                            key={index} 
                            className={itemNavbar.className}>
                            <NavLink 
                                to={itemNavbar.to} 
                                onClick={() => setSearchByCategory(itemNavbar.name)}
                                className={({ isActive }) => isActive ? activeStyle : undefined}>
                                {itemNavbar.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <ul className="flex items-center gap-3">
                    {menuOfRigth.map((itemNavbar, index) => (
                        <li key={index} className={itemNavbar.className} >
                            <NavLink to={itemNavbar.to} className={({ isActive }) => isActive ? activeStyle : undefined}>
                                {itemNavbar.name}
                                {/* {itemNavbar.shoppingCartCounter}  */}
                                {/* TODO: Remover el estado del contador, por el tamañó del array de productos (productsInShoppingCart.length) */}
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <ShoppingBagIcon className="w-4 h-4 inline mr-1"/> {shoppingCartCounter}
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    );
}

export { Navbar };