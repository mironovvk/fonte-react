import './Content.scss';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '@/pages/AboutPage';
import TeamPage from '@/pages/TeamPage';
import BlogPage from '@/pages/BlogPage';
import ProductPage from '@/pages/ProductPage';
import HomePage from '@/pages/HomePage';
import ContactPage from '@/pages/ContactPage';

const Content = () => {
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </main>
  );
};

export default Content;
