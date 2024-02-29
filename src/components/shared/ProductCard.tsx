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
        <div className='u-flex u-justify-between'>
          <h3 className='card__face-category'>{category}</h3>

          <button className='card__face-btn u-flex u-items-center u-gap-3'>
            <span className='dot' />
            <span className='dot' />
            <span className='dot' />
          </button>
        </div>

        <p className='card__face-price'>{price}$</p>

        <div className='u-flex u-justify-between u-gap-22'>
          <span className='card__face-title'>
            {title.length > 35 ? title.slice(0, 35) + ' ...' : title}
          </span>

          <div className='u-text-center u-flex u-flex-col gap-3'>
            <span>InStore</span>
            <span>{rating.count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
