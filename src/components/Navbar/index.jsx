import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const menuOfLeft = [
        { to: '/', itemName: 'Shopi', className: 'font-semibold text-lg' },
        { to: '/', itemName: 'All'},
        { to: '/clothes', itemName: 'clothes'},
        { to: '/electronics', itemName: 'electronics'},
        { to: '/furnitures', itemName: 'furnitures'},
        { to: '/toys', itemName: 'toys'},
        { to: '/others', itemName: 'others'},
    ];

    const menuOfRigth = [
        { to: '/email', itemName: 'example@gmail.com', className: 'text-black/60'},
        { to: '/myorders', itemName: 'My orders'},
        { to: '/myoccount', itemName: 'My occount'},
        { to: '/signin', itemName: 'Sign in' },
        { to: '/shoppcar', itemName: '🛒' },
    ]

    const activeStyle = 'underline underline-offset-4';

    return (
        <React.Fragment>
            <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
                <ul className="flex items-center gap-3">
                    {menuOfLeft.map((itemNavbar, index) => (
                        <li key={index} className={itemNavbar.className}>
                            <NavLink to={itemNavbar.to} className={({ isActive }) => isActive ? activeStyle : undefined}>
                                {itemNavbar.itemName}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <ul className="flex items-center gap-3">
                    {menuOfRigth.map((itemNavbar, index) => (
                        <li key={index} className={itemNavbar.className}>
                            <NavLink to={itemNavbar.to} className={({ isActive }) => isActive ? activeStyle : undefined}>
                                {itemNavbar.itemName}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </React.Fragment>
    );
}

export { Navbar };