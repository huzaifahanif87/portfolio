


import { useState } from "react";
import Intro from "./components/Intro";
import Cards from "./components/Cards";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="h-screen w-full">
      {!activeSection ? (
        <Intro onFinish={() => setActiveSection("cards")} />
      ) : activeSection === "cards" ? (
        <Cards onCardClick={setActiveSection} />
      ) : activeSection === "Projects" ? (
        <Projects onBack={() => setActiveSection("cards")} />
      ) : activeSection === "Contact" ? (
        <Contact onBack={() => setActiveSection("cards")} />
      ) : activeSection === "About" ? (
        <About onBack={() => setActiveSection("cards")} />
      ) : null}
    </div>
  );
}

export default App;