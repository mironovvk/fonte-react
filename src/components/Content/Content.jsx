import './Content.scss';
import { Routes, Route } from 'react-router-dom';
import BlogPage from '@/pages/BlogPage';
import ProductPage from '@/pages/ProductPage';
import HomePage from '@/pages/HomePage';

const Content = () => {
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div>О нас</div>} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contacts" element={<div>Контакты</div>} />
      </Routes>
    </main>
  );
};

export default Content;
