import React from "react";
import { XCircleIcon } from '@heroicons/react/24/solid';

function OrderProduct({id, title, image, price, removeProduct}) {
    let renderXCircleIcon;
    if(removeProduct) {
        renderXCircleIcon = <XCircleIcon onClick={() => removeProduct(id)} className="h-6 w-6 text--black cursor-pointer" />
    }

    return (
        <React.Fragment>
            <article className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                    <figure className="w-20 h-20">
                        <img className="w-full h-full rounded-lg object-contain" src={image} alt={title} />
                    </figure>         
                    <div className="w-full h-full">                    
                        <p className="text-sm font-light">{title}</p>
                    </div>           
                </div>
                <div className="flex items-center gap-2 p-2">
                    <span className="text-lg font-medium">${price}</span>
                    <span>
                        {renderXCircleIcon}
                    </span>
                </div>
            </article>
        </React.Fragment>
    );
}

export { OrderProduct };