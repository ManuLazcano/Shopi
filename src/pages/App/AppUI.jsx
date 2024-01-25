import React from "react";
import { BrowserRouter, useRoutes } from 'react-router-dom';

import { Navbar } from '../../components/Navbar';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { SingIn } from '../SingIn';
import { NotFound } from '../NotFound';
import { ShoppingCartProvider } from '../../Contexts/ShoppingCartContext';
import { CheckoutSideMenu } from "../../components/CheckoutSideMenu";
import { CheckoutSideMenuProvider } from "../../Contexts/CheckoutSideMenuContext";

function AppRoutes() {
    const routes = useRoutes([
        { path: '/', element: <Home />},
        { path: '/my-account', element: <MyAccount />},
        { path: '/my-order', element: <MyOrder />},
        { path: '/my-orders', element: <MyOrders />},
        { path: '/sign-in', element: <SingIn />},
        { path: '/*', element: <NotFound />},
    ]);

    return routes;
}

function AppUI() {
    return (
        <React.Fragment>    
            <ShoppingCartProvider>
                <CheckoutSideMenuProvider>
                    <BrowserRouter>
                        <AppRoutes />
                        <Navbar />
                        <CheckoutSideMenu />                    
                    </BrowserRouter>    
                </CheckoutSideMenuProvider>
            </ShoppingCartProvider>
        </React.Fragment>
    );
}

export { AppUI };