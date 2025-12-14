import './ProductCard.scss';
import Button from '@/ui/Button';

const ProductCard = ({title, text, image}) => {
  return (
    <article className="product-card">
      {/* ФОН */}
      <div
        className="product-card__bg"
        style={{backgroundImage: `url(${image})`}}
      />

      {/* КОНТЕНТ */}
      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__text">{text}</p>
        <Button
          className="product-card__button"
          type="button"
          title="Подробнее"
        />
      </div>
    </article>
  );
};

export default ProductCard;
