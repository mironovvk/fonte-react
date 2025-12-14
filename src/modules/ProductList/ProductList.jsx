import './PostList.scss';
import classNames from 'classnames';
import ProductCard from '@/components/ProductCard';

const ProductList = ({ className, cards }) => {
  return (
    <div className={classNames('product-list', className)}>
      {cards.map(({ id, image, title, text }) => (
        <ProductCard image={image} title={title} text={text} key={id} />
      ))}
    </div>
  );
};

export default ProductList;
