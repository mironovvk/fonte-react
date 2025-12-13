import "@/styles";
import Footer from "@/components/Footer";
import { navLinks } from "@/mocks/ nav.mock.js";

function App() {
  return (
    <>
      <h1>Fonte</h1>
      <Footer navLinks={navLinks} />
    </>
  );
}

export default App;
