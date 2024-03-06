import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import { ApiContext } from "../../Contexts/ApiContext";
import { AuthContext } from "../../Contexts/AuthContext";
import { ShoppingCart } from "../ShoppingCart";

function Navbar() {    
    const {
        setSearchByCategory,
        setSearchByTitle
    } = useContext(ApiContext);

    const { signOut, setSignOut, account } = useContext(AuthContext);

    const menuOfLeft = [                
        { to: '/electronics', name: 'electronics'},
        { to: '/jewelery', name: 'jewelery'},
        { to: '/mens-clothing', name: 'men\'s clothing'},
        { to: '/womens-clothing', name: 'women\'s clothing'},
    ];

    const menuOfRigth = [        
        { to: '/my-orders', name: 'My orders'},
        { to: '/my-account', name: 'My occount'},        
    ]

    const activeStyle = 'underline underline-offset-4';
    //Sign out
    const signOutInLocalStorage = localStorage.getItem('sign-out');
    const parsedSignOut = JSON.parse(signOutInLocalStorage);
    const isUserSignOut = signOut || parsedSignOut;
    // Account
    const accountInLocalStorage = localStorage.getItem('account');
    const parsedAccount = JSON.parse(accountInLocalStorage);
    // Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
    const noAccountInLocalState = account ? Object.keys(account).length === 0 : true;
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

    const handleSignOut = () => {
        const stringifyfiedSignOut = JSON.stringify(true);
        localStorage.setItem('sign-out', stringifyfiedSignOut);
        setSignOut(true);
    }

    function renderView() {
        if(hasUserAnAccount && !isUserSignOut) {
            return (
                <>
                    <li className="text-black/60">{parsedAccount?.email}</li>
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
                        <ShoppingCart />                        
                    </li>
                </>
            );
        } else {
            return (
                <li>
                    <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => handleSignOut()}>
                        Sign out
                    </NavLink>
                </li>
            );            
        }
    }

    return (
        <React.Fragment>
            <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
                <ul className="flex items-center gap-3">
                    <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>
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