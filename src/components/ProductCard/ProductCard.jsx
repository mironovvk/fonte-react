import './ProductCard.scss'
import Button from "@/ui/Button/index.js";

const ProductCard = ({ title, text, image }) => {
  return (
    <article
      className="product-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="product-card__overlay" />
      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__text">{text}</p>
        <Button
          type="button"
        >
          Подробнее
        </Button>
      </div>
    </article>
  )
}

export default ProductCard