import React from "react";

import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { ProductDetail } from "../../components/ProductDetail";
import { ProductDetailProvider } from "../../Contexts/ProductDetailContext";
import { ApiContext } from "../../Contexts/ApiContext";

function Home() {
  const { products, setSearchByTitle } = React.useContext(ApiContext);

  return (
    <React.Fragment>
      <Layout>
        <div className="flex items-center justify-center w-80 relative mb-6">        
          <h1 className='font-medium text-xl'>Home</h1>
        </div>
        <input 
          type="text" 
          placeholder="Search a product" 
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          onChange={(event) => setSearchByTitle(event.target.value)} />
        <ProductDetailProvider>            
          <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {
              products.map((product) => (
                <Card key={product.id} product={product}/>            
              ))
            }
          </section>
          <ProductDetail />                        
        </ProductDetailProvider>        
      </Layout>
    </React.Fragment>
  )
}

export { Home };
