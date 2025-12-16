import './ProductPage.scss';
import { productsMock } from '@/mocks/product.mock.js';
import Section from '@/components/Section';
import ProductList from '@/modules/ProductList';
import Hero from '@/modules/Hero';

const ProductPage = () => {
  return (
    <>
      <Section title="Продукты">
        <ProductList cards={productsMock} />
      </Section>
      <Hero />
    </>
  );
};

export default ProductPage;
