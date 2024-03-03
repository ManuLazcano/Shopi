import React, { useContext } from "react";
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom';

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
import { ApiContextProvider } from "../../Contexts/ApiContext";
import { AuthContext, AuthProvider, initializeLocalStorage } from "../../Contexts/AuthContext";
import { ProductDetailProvider } from "../../Contexts/ProductDetailContext";


function AppRoutes() {
    const { account, signOut } = useContext(AuthContext);

    // Account
    const accountInLocalStorage = localStorage.getItem('account');
    const parsedAccount = JSON.parse(accountInLocalStorage);
    // Sign out
    const signOutInLocalStorage = localStorage.getItem('sign-out') ;
    const parsedSignOut = JSON.parse(signOutInLocalStorage);
    // Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
    const noAccountInLocalState = Object.keys(account).length === 0;
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
    const isUserSignOut = signOut || parsedSignOut;

    const routes = useRoutes([
        { path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},        
        { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
        { path: '/jewelery', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
        { path: '/mens-clothing', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
        { path: '/womens-clothing', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},        
        { path: '/my-account', element: <MyAccount />},
        { path: '/my-order', element: <MyOrder />},
        { path: '/my-orders', element: <MyOrders />},
        { path: '/my-orders/last', element: <MyOrder />},
        { path: '/my-orders/:id', element: <MyOrder />},
        { path: '/sign-in', element: <SingIn />},
        { path: '/*', element: <NotFound />},
    ]);

    return routes;
}

function AppUI() {
    initializeLocalStorage();

    return (   
        <AuthProvider>
            <ApiContextProvider>
                <ShoppingCartProvider>
                    <ProductDetailProvider>
                        <CheckoutSideMenuProvider>
                            <BrowserRouter>
                                <Navbar />
                                <AppRoutes />
                                <CheckoutSideMenu />                    
                            </BrowserRouter>    
                        </CheckoutSideMenuProvider>
                    </ProductDetailProvider>
                </ShoppingCartProvider>
            </ApiContextProvider>        
        </AuthProvider> 
    );
}

export { AppUI };