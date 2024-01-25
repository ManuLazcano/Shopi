import { createContext, useState } from "react";
import React from "react";

const CheckoutSideMenuContext = createContext();

function CheckoutSideMenuProvider({children}) {
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    return (
        <React.Fragment>
            <CheckoutSideMenuContext.Provider value={{
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,                
            }}>
                {children}
            </CheckoutSideMenuContext.Provider>
        </React.Fragment>
    );
}

export { CheckoutSideMenuProvider, CheckoutSideMenuContext };