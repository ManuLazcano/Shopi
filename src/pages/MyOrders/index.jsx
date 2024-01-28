import React from 'react';
import { Link } from 'react-router-dom';

import { Layout } from '../../components/Layout';
import { CheckoutSideMenuContext } from '../../Contexts/CheckoutSideMenuContext';
import { OrdersProduct } from '../../components/OrdersProduct';

function MyOrders() {
  const { groupOrders } = React.useContext(CheckoutSideMenuContext);

  return (
    <React.Fragment>
      <Layout>
        <div className='mb-4'>         
          <h1 className='font-medium text-xl'>My orders</h1>
        </div>
        {
          groupOrders.map((order, index) => (            
            <Link key={index} to={`/my-orders/${index}`}>            
              <OrdersProduct                 
                totalPrice={order.totalPrice} 
                totalProducts={order.totalProducts} />
            </Link>
          ))
        }
      </Layout>
    </React.Fragment>
  )
}
  
export {MyOrders};