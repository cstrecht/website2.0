import Navbar from "./components/Navbar";
import Intro from "./pages/Intro";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
