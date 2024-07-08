import React from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/Aboutme";
import Contact from "@/components/Contactme";

export default function Home() {
  return (
    <div>
  <Nav />
  <Hero/>
  <About/>
  <Contact/>
  </div>
  )
}
