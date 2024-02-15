import React, { createContext, useState } from "react";

const CheckoutSideMenuContext = createContext();

function CheckoutSideMenuProvider({children}) {
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    const [groupOrders, setGroupOrders] = useState([]);

    return (
        <React.Fragment>
            <CheckoutSideMenuContext.Provider value={{
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                setGroupOrders,
                groupOrders,
            }}>
                {children}
            </CheckoutSideMenuContext.Provider>
        </React.Fragment>
    );
}

export { CheckoutSideMenuProvider, CheckoutSideMenuContext };