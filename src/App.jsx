import '@/styles';
import Footer from '@/components/Footer';
import { navLinks } from '@/mocks/nav.mock.js';
import Content from '@/components/Content';

function App() {
  return (
    <>
      <Content />
      <Footer navLinks={navLinks} />
    </>
  );
}

export default App;
