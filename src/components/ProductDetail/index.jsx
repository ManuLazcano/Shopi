import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';

import { ProductDetailContext } from '../../Contexts/ProductDetailContext';

function ProductDetail() {
    const {
        isProductDetailOpen,
        closeProductDetail,
        productDetail
    } = React.useContext(ProductDetailContext);

    return (
        <React.Fragment>
            <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-68px)] flex-col overflow-y-auto fixed top-[68px] right-0 border border-black rounded-lg bg-white`}>
                <article>
                    <div className="flex justify-between items-center p-6">
                        <h2 className="font-medium text-xl">Detail</h2>
                        <span>
                            <XCircleIcon onClick={() => closeProductDetail()} className="h-6 w-6 text--black cursor-pointer" />
                        </span>
                    </div>
                    <figure className='px-5'>
                        <img src={productDetail.image} alt={productDetail.title} />
                    </figure>
                    <p className='flex flex-col p-5'>
                        <span className='font-medium text-2xl mb-2'>{productDetail.price}</span>
                        <span className='font-medium text-md mb-1'>{productDetail.title}</span>
                        <span className='font-light text-sm'>{productDetail.description}</span>
                    </p>
                </article>
            </aside>
        </React.Fragment>
    );
}

export { ProductDetail };