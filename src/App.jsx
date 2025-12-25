import '@/styles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { navLinks } from '@/mocks/nav.mock.js';
import Content from '@/components/Content';
import Snowfall from 'react-snowfall';

function App() {
  return (
    <>
      <Snowfall color='#82c3d9' />
      <Header navLinks={navLinks} />
      <Content />
      <Footer navLinks={navLinks} />
    </>
  );
}

export default App;
