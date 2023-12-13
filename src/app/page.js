"use client";

import "../styles/customTheme.scss";
import styles from "./page.module.css";

import SideBar from "./SideBar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <SideBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
