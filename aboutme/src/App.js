import logo from './logo.svg';
import './App.css';
import React from "react";  
import Header from "./components/Header";
import About from "./components/About"; 
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from './components/Education';
import Footer from './components/Footer';
import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
