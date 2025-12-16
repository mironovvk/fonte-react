import './ProductPage.scss';
import { productsMock } from '@/mocks/product.mock.js';
import Section from '@/components/Section';
import ProductList from '@/modules/ProductList';

const ProductPage = () => {
  return (
    <>
      <Section title="Продукты">
        <ProductList cards={productsMock} />
      </Section>
    </>
  );
};

export default ProductPage;
