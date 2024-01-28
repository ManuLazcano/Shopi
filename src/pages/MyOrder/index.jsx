import React from 'react';

import { Layout } from '../../components/Layout';
import { OrderProduct } from '../../components/OrderProduct';
import { CheckoutSideMenuContext } from '../../Contexts/CheckoutSideMenuContext';

function MyOrder() {
  const { groupOrders } = React.useContext(CheckoutSideMenuContext);

  return (
    <React.Fragment>
      <Layout>
        MyOrder
        <section className="flex flex-col w-80">
          {groupOrders?.slice(-1)[0].products.map(product => (
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