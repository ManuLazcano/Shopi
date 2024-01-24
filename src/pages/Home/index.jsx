import React from "react";
import { useState } from "react";

import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { useEffect } from "react";
import { ProductDetail } from "../../components/ProductDetail";
import { ProductDetailProvider } from "../../Contexts/ProductDetailContext";

function Home() {
  const BASE_URL = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch(BASE_URL)
      .then(respone => respone.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Ocurrio un error: ', err))
  },[]);

  return (
    <React.Fragment>
      <Layout>
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
