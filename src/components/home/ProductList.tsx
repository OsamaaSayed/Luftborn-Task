import { useEffect, useState } from 'react';

import ProductCard from '../shared/ProductCard';

import { Product } from '../../types';
import { backgroundColors } from '../../constants';
import ProductCardSkeleton from '../shared/ProductCardSkeleton';

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
    <section className='section-products'>
      {isLoading &&
        Array.from(Array(10).keys()).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}

      {!isLoading && error && (
        <img
          className='section-products__img'
          src='/images/error.png'
          alt='error'
        />
      )}

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
