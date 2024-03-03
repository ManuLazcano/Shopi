import { useContext } from "react";
import { CheckoutSideMenuContext } from '../../Contexts/CheckoutSideMenuContext';
import { ShoppingCartContext } from '../../Contexts/ShoppingCartContext';
import { ProductDetailContext } from '../../Contexts/ProductDetailContext';

import { ShoppingBagIcon } from '@heroicons/react/24/solid'

function ShoppingCart() {
    const { productsInShoppingCart } = useContext(ShoppingCartContext);
    const { openCheckoutSideMenu } = useContext(CheckoutSideMenuContext);    
    const { closeProductDetail } = useContext(ProductDetailContext);    


    const openCheckoutSide = () => {
        openCheckoutSideMenu();
        closeProductDetail();
    }

    return (
        <div className="relative flex gap-0.5 items-center"
            onClick={() => openCheckoutSide()}>
            <ShoppingBagIcon className="w-4 h-4 inline mr-1"/>
            <div className="absolute bottom-2.5 left-2.5 flex justify-center items-center rounded-full w-4 h-4 text-xs font-medium text-black">
                {productsInShoppingCart.length}
            </div>
        </div>
    );
    
}

export { ShoppingCart };