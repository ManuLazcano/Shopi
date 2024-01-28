import React from "react";

import { ChevronRightIcon, ShoppingBagIcon, CalendarIcon } from '@heroicons/react/24/solid';

function OrdersProduct({ totalPrice, totalProducts}) {

    return (
        <React.Fragment>
            <article className="flex justify-between items-center mb-4 border border-black w-80 p-4 rounded-lg shadow-md">             
                <section className="flex justify-between w-full">
                    <div className="flex flex-col">
                        <p className="flex items-center gap-2">
                            <CalendarIcon className="w-4 h-4 text-black cursor-pointer"/>
                            <span className="font-light">01.02.2023</span>
                        </p>
                        <p className="flex gap-2 items-center">
                            <ShoppingBagIcon className="w-4 h-4 text-black cursor-pointer"/>
                            <span className="font-light">{totalProducts} articles</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-2">                                        
                        <p className="font-medium text-2xl">${totalPrice}</p>
                        <ChevronRightIcon className="w-6 h-6 text-black cursor-pointer"/>
                    </div>
                </section>
            </article>
        </React.Fragment>
    );
}

export { OrdersProduct };