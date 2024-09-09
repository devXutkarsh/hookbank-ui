import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Navbar from "./components/Navbar";

// https://business-website-template.onrender.com/

function App() {
  return (
    <div className="w-full bg-black  text-white">
      <Header />
      <Hero />
      <Features />
      <Navbar />
    </div>
  );
}

export default App;
