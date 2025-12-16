import './ProductPage.scss';
import { productsMock } from '@/mocks/product.mock.js';
import Section from '@/components/Section';
import ProductList from '@/modules/ProductList';
import Hero from '@/modules/Hero';
import SliderButton from '@/ui/SliderButton/index.js';

const ProductPage = () => {
  return (
    <>
      <Hero />
      <Section title="Продукты">
        <ProductList cards={productsMock} />
      </Section>
    </>
  );
};

export default ProductPage;
