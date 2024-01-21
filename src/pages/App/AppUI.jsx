import React from "react";
import { BrowserRouter, useRoutes } from 'react-router-dom';

import { Navbar } from '../../components/Navbar';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { SingIn } from '../SingIn';
import { NotFound } from '../NotFound';

function AppRoutes() {
    const routes = useRoutes([
        { path: '/', element: <Home />},
        { path: '/my-account', element: <MyAccount />},
        { path: '/my-order', element: <MyOrder />},
        { path: '/my-orders', element: <MyOrders />},
        { path: '/sing-in', element: <SingIn />},
        { path: '/*', element: <NotFound />},
    ]);

    return routes;
}

function AppUI() {
    return (
        <React.Fragment>    
            <BrowserRouter>
                <AppRoutes />
                <Navbar />
            </BrowserRouter>    
        </React.Fragment>
    );
}

export { AppUI };