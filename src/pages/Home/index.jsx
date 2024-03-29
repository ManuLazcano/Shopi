import React from "react";

import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { ProductDetail } from "../../components/ProductDetail";
import { ApiContext } from "../../Contexts/ApiContext";

function Home() {
  const { setSearchByTitle, filteredProducts } = React.useContext(ApiContext);
  const renderView = () => {
    if(filteredProducts?.length > 0) {
      return (
        filteredProducts?.map((product) => (
          <Card key={product.id} product={product}/>            
        ))
      );
    } else {
      return (
          <div>We don't have anything</div>
        );
    }
  };

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
          onChange={(event) => setSearchByTitle(event.target.value)} 
        />        
          <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {renderView()}
          </section>
          <ProductDetail />                                
      </Layout>
    </React.Fragment>
  )
}

export { Home };
