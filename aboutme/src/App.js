import logo from './logo.svg';
import './App.css';
import React from "react";  
import Header from "./components/Header";
import About from "./components/About"; 
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from './components/Education';
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Education />
    </div>
  );
}

export default App;
