import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const menuOfLeft = [
        { to: '/', name: 'Shopi', className: 'font-semibold text-lg' },
        { to: '/', name: 'All'},
        { to: '/clothes', name: 'clothes'},
        { to: '/electronics', name: 'electronics'},
        { to: '/furnitures', name: 'furnitures'},
        { to: '/toys', name: 'toys'},
        { to: '/others', name: 'others'},
    ];

    const menuOfRigth = [
        { to: '/email', name: 'example@gmail.com', className: 'text-black/60'},
        { to: '/my-orders', name: 'My orders'},
        { to: '/my-account', name: 'My occount'},
        { to: '/sign-in', name: 'Sign in' },
        { to: '/shoppcar', name: '🛒' },
    ]

    const activeStyle = 'underline underline-offset-4';

    return (
        <React.Fragment>
            <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
                <ul className="flex items-center gap-3">
                    {menuOfLeft.map((itemNavbar, index) => (
                        <li key={index} className={itemNavbar.className}>
                            <NavLink to={itemNavbar.to} className={({ isActive }) => isActive ? activeStyle : undefined}>
                                {itemNavbar.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <ul className="flex items-center gap-3">
                    {menuOfRigth.map((itemNavbar, index) => (
                        <li key={index} className={itemNavbar.className}>
                            <NavLink to={itemNavbar.to} className={({ isActive }) => isActive ? activeStyle : undefined}>
                                {itemNavbar.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </React.Fragment>
    );
}

export { Navbar };