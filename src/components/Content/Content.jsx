import "./Content.scss";
import { Routes, Route } from "react-router-dom";
import BlogPage from "@/pages/BlogPage/index.js";

const Content = () => {
  return (
    <main className="content container">
      <Routes>
        <Route path="/" element={<div>Главная</div>} />
        <Route path="/about" element={<div>О нас</div>} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/products" element={<div>Продукты</div>} />
        <Route path="/contacts" element={<div>Контакты</div>} />
      </Routes>
    </main>
  );
};

export default Content;
