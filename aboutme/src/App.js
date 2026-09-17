import React from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
