import { Product } from '../../types';

interface ProductCardProps extends React.ComponentPropsWithoutRef<'div'> {
  product: Product;
  backgroundColor: string;
}

const ProductCard = ({
  product: { title, price, rating, category },
  backgroundColor,
}: ProductCardProps) => {
  return (
    <div
      className='card'
      style={{ backgroundColor }}
    >
      <div className='card__face'>
        <div className='card__face-header'>
          <h3 className='category'>{category}</h3>

          <button className='btn'>
            <span className='dot' />
            <span className='dot' />
            <span className='dot' />
          </button>
        </div>

        <div className='card__face-price-sm'>
          <p className='price'>{price}$</p>

          <span className='title'>
            {title.length > 35 ? title.slice(0, 35) + ' ...' : title}
          </span>
        </div>

        <p className='card__face-price'>{price}$</p>

        <div className='card__face-footer'>
          <span className='title'>
            {title.length > 35 ? title.slice(0, 35) + ' ...' : title}
          </span>

          <div className='store'>
            <span>InStore</span>
            <span>{rating.count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
