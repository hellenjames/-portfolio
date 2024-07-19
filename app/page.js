import React from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/Aboutme";
import Contact from "@/components/Contactme";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
  
  <Hero/>
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
  </div>
  )
}
