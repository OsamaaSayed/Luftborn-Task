import { Product } from '../../types';

interface ProductCardProps extends React.ComponentPropsWithoutRef<'div'> {
  product: Product;
}

const ProductCard = ({
  product: { title, description, price, image, rating, category },
}: ProductCardProps) => {
  return <div>ProductCard</div>;
};

export default ProductCard;
