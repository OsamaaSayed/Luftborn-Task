import { useEffect, useState } from 'react';

import Aside from '../components/layout/Aside';
import ProductCard from '../components/shared/ProductCard';

import { Product } from '../types';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products?limit=10');

        if (!res.ok) {
          throw new Error('Failed fetching products!');
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        // setError(err.message);
        console.log('🚀 ~ err:', err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <main className='u-min-h-screen u-container u-mx-auto u-flex u-justify-center u-items-center'>
      <div className='u-flex u-gap-33'>
        <Aside />

        <section>
          <div className='section-main'>
            {isLoading && <h1>Loading...</h1>}
            {!isLoading && error && <h1>Error...</h1>}
            {!isLoading &&
              !error &&
              products.length > 0 &&
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
