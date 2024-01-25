import { XCircleIcon } from '@heroicons/react/24/solid';

import React from 'react';
import { CheckoutSideMenuContext } from '../../Contexts/CheckoutSideMenuContext';

function CheckoutSideMenu() {
    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,    
    } = React.useContext(CheckoutSideMenuContext);

    return (
        <React.Fragment>
            <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-68px)] flex-col overflow-y-auto fixed top-[68px] right-0 border border-black rounded-lg bg-white`}>
                <article>
                    <div className="flex justify-between items-center p-6">
                        <h2 className="font-medium text-xl">My order</h2>
                        <span>
                            <XCircleIcon onClick={() => closeCheckoutSideMenu()} className="h-6 w-6 text--black cursor-pointer" />    
                        </span>
                    </div>                                       
                </article>
            </aside>
        </React.Fragment>
    );
}

export { CheckoutSideMenu };