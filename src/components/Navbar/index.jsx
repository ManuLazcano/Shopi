import React, { useContext } from "react";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Contexts/ShoppingCartContext";
import { ApiContext } from "../../Contexts/ApiContext";
import { AuthContext } from "../../Contexts/AuthContext";

function Navbar() {
    const {
        productsInShoppingCart
    } = useContext(ShoppingCartContext);
    
    const {
        setSearchByCategory,
        setSearchByTitle
    } = useContext(ApiContext);

    const { signOut, setSignOut } = useContext(AuthContext);

    const menuOfLeft = [                
        { to: '/electronics', name: 'electronics'},
        { to: '/jewelery', name: 'jewelery'},
        { to: '/mens-clothing', name: 'men\'s clothing'},
        { to: '/womens-clothing', name: 'women\'s clothing'},
    ];

    const menuOfRigth = [        
        { to: '/my-orders', name: 'My orders'},
        { to: '/my-account', name: 'My occount'},
        // { to: '/sign-in', name: 'Sign in' },        
    ]

    const activeStyle = 'underline underline-offset-4';

    const signOutInLocalStorage = localStorage.getItem('sign-out');
    const parsedSignOut = JSON.parse(signOutInLocalStorage);
    const isUserSignOut = signOut || parsedSignOut;

    const handleSignOut = () => {
        const stringifyfiedSignOut = JSON.stringify(true);
        localStorage.setItem('sign-out', stringifyfiedSignOut);
        setSignOut(true);
    }

    function renderView() {
        if(isUserSignOut) {
            return (
                <li>
                    <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => handleSignOut()}>
                        Sign out
                    </NavLink>
                </li>
            );
        } else {
            return (
                <>
                    <li className="text-black/60">example@gmail.com</li>
                        {menuOfRigth.map((itemNavbar, index) => (
                            <li key={index}>
                                <NavLink to={itemNavbar.to} className={({ isActive }) => isActive ? activeStyle : undefined}>
                                    {itemNavbar.name}                                                                
                                </NavLink>
                            </li>
                        ))}
                    <li>
                        <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={() => handleSignOut()}>
                            Sign out
                        </NavLink>
                    </li>
                    <li>
                        <ShoppingBagIcon className="w-4 h-4 inline mr-1"/> {productsInShoppingCart.length}
                    </li>
                </>
            );
        }
    }

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
                        <li key={index}>
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
                    {renderView()}
                </ul>
            </nav>
        </React.Fragment>
    );
}

export { Navbar };