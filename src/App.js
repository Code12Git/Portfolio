import Topbar from "./Components/Navbar/Topbar";
import Contact from "./Components/Contact/Contact";
import "./App.css";

import Banner from "./Components/Banner/Banner";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Topbar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
