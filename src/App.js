import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Service from "./components/service";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <footer>&copy; Fathir Ramdan Maulani</footer>
    </div>
  );
}

export default App;
