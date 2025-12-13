import '@/styles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { navLinks } from '@/mocks/nav.mock.js';
import Content from '@/components/Content';

function App() {
  return (
    <>
      <Header navLinks={navLinks} />
      <Content />
      <Footer navLinks={navLinks} />
    </>
  );
}

export default App;
