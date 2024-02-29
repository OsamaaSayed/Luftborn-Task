import { useEffect, useState } from 'react';
import { Product } from '../../types';
import ProductCard from '../shared/ProductCard';

import { backgroundColors } from '../../constants';

const ProductList = () => {
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
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <section className='section-main'>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && error && <h1>{error}</h1>}

      {!isLoading &&
        !error &&
        products.length > 0 &&
        products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            backgroundColor={backgroundColors[index]}
          />
        ))}
    </section>
  );
};

export default ProductList;
