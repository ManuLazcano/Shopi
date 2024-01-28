import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

import { Layout } from '../../components/Layout';
import { OrderProduct } from '../../components/OrderProduct';
import { CheckoutSideMenuContext } from '../../Contexts/CheckoutSideMenuContext';

function MyOrder() {
  const { groupOrders } = React.useContext(CheckoutSideMenuContext);
  const currentPath = window.location.pathname;
  let indexOfId = currentPath.substring(currentPath.lastIndexOf('/') + 1);  
  if(indexOfId === 'last') indexOfId = groupOrders?.length - 1;
  
  return (
    <React.Fragment>
      <Layout>
        <div className="flex items-center justify-center w-80 relative mb-6">
          <Link to='/my-orders' className="absolute left-0">
            <ChevronLeftIcon className="w-6 h-6 text-black cursor-pointer"/>          
          </Link>
          <h1 className='font-medium text-xl'>My order</h1>
        </div>
        <section className="flex flex-col w-80">
          {groupOrders?.[indexOfId]?.products.map(product => (
              <OrderProduct 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}                                                    
              />
          ))}                                  
        </section>
      </Layout>
    </React.Fragment>
  )
  }
  
  export {MyOrder};